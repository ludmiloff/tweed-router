/** @jsx Node */

import { Node } from 'tweed'
import Router from './Router'

export HashHistory from './HashHistory'
import BrowserHistory from './BrowserHistory'
export { BrowserHistory }

export default class BrowserRouter extends Router {
  constructor (routes, history) {
    super(routes)

    this._history = history

    this._onURLChange = this._onURLChange.bind(this)
    this._onClickLink = this._onClickLink.bind(this)
  }

  static async make (routes, history = new BrowserHistory()) {
    const router = new BrowserRouter(routes, history)

    await router.navigate(history.path, false)

    history.onURLChange(router._onURLChange)

    return router
  }

  _onURLChange () {
    this.navigate(this._history.path, false)
  }

  async navigate (path, push = true) {
    const route = await super.navigate(path)
    let title = document.title

    if (route.title != null) {
      title = route.title
    }

    if (push) {
      this._history.changeURL(path, title)
    }

    document.title = title

    return route
  }

  _onClickLink (event) {
    event.preventDefault()

    this.navigate(event.target.pathname)
  }

  link (href, title, attributes = {}) {
    const event = href in this.routes
      ? { 'on-click': this._onClickLink }
      : {}

    return (
      <a
        href={href}
        {...event}
        {...attributes}
      >{title}</a>
    )
  }
}
