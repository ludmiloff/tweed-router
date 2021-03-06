# Tweed Router

Universal Router for Tweed.

## Installation

```shell
$ npm install --save tweed-router
```

## Usage

```javascript
const router = new Router({
  '/': () => new HomePage(),
  '/about': () => new AboutPage()
})

router.navigate('/')
```

Render the router with Tweed's `render` method to render the current page of the router
automatically:

```javascript
import { VirtualNode } from 'tweed'
import render from 'tweed/render/dom'

class HomePage {
  constructor (router) {
    this.router = router
  }

  render () {
    return (
      <p>
        Home page! Go to {this.router.link('the about page', '/about')}
      </p>
    )
  }
}

const router = new Router({
  '/': () => new HomePage(router),
  '/about': () => <p>About page</p>
})

router.navigate('/')
  .then(() => render(router, document.querySelector('#app')))
```

To hook up the router to the browser's History API, use the `BrowserRouter` like this:

```javascript
import BrowserRouter from 'tweed-router/browser'

const routes = {
  '/': (router) => new HomePage(router),
  '/about': () => new AboutPage()
}

BrowserRouter.make(routes)
  .then((router) => render(router, document.querySelector('#app')))
```

The router can also be used on the server using the `ServerRouter` like so:

```javascript
import ServerRouter from 'tweed-router/server'

ServerRouter.make(routes)
  .then((router) => router.handle(req, res))
```
