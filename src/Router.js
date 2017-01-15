/** @jsx Node */

import { mutating, Node } from 'tweed'
import PageNotFoundError from './errors/PageNotFoundError'
import Endpoint from './Endpoint'

export default class Router {
  @mutating current = null
  @mutating isLoading = false
  currentPath = '/'

  constructor (routes) {
    this.routes = Object.keys(routes)
      .map((s) =>
        [Endpoint.parse(s), routes[s]]
      )

    this._onClickLink = this._onClickLink.bind(this)
  }

  async navigate (path) {
    this.isLoading = true

    for (let i = 0; i < this.routes.length; i++) {
      const [endpoint, handler] = this.routes[i]
      const match = endpoint.match(path)

      if (match.matches) {
        const result = await handler(this, match.params)
        this.current = await this._normalizeRouteResponse(result)
        this.currentEndpoint = endpoint
        this.currentPath = '/' + path.split('/').filter((s) => s).join('/')
        this.isLoading = false
        return this.current
      }
    }
    this.isLoading = false

    throw new PageNotFoundError(path)
  }

  async _normalizeRouteResponse (response) {
    const isAnObject =
      typeof response === 'object'
    const isAnObjectWithLoad =
      isAnObject && typeof response.load === 'function'
    const isAModuleWithDefault =
      isAnObject && response.default != null
    const isAModuleWithDefaultComponent =
      isAModuleWithDefault && typeof response.default.render === 'function'
    const isAModuleWithDefaultClass =
      isAModuleWithDefault && typeof response.default === 'function'
    const isAModuleWithDefaultClassWithLoad =
      isAModuleWithDefaultClass && typeof response.default.load === 'function'

    if (isAnObjectWithLoad) {
      return response.load(this)
    }
    if (isAModuleWithDefaultComponent) {
      return response.default
    }
    if (isAModuleWithDefaultClassWithLoad) {
      return response.default.load(this)
    }
    if (isAModuleWithDefaultClass) {
      return new response.default(this) // eslint-disable-line
    }
    return response
  }

  render () {
    if (this.current == null) {
      return (
        <div>Not Found</div>
      )
    }

    if (typeof this.current.render === 'function') {
      return this.current.render()
    }

    return this.current
  }

  _onClickLink (event) {
    event.preventDefault()

    this.navigate(event.target.pathname)
  }

  link (href, title, attributes = {}) {
    return (
      <a
        href={href}
        on-click={this._onClickLink}
        {...attributes}
      >{title}</a>
    )
  }

  isActive (path) {
    return this.currentPath === '/' + path.split('/').filter((s) => s).join('/')
  }
}
