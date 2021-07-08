import express from 'express'
import next from 'next'
import LRUCache from 'lru-cache'
import config from './config'
import routes from './routes'
import cacheConfig from './cache-config'

const { host, port } = config
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 // 1hour
})

function handleRoute(req, res, isCached = false) {
  // Match route + parse params
  const { route, params } = routes.match(req.url)
  if (!route) return handle(req, res)

  app
    .renderToHTML(req, res, route.page, params)
    .then(html => {
      if (isCached) ssrCache.set(req.url, html)
      res.send(html)
    })
    .catch(err => {
      app.renderError(err, req, res, route.page, params)
    })
}

function renderAndCache(req, res) {
  const cacheRule = Object.entries(cacheConfig).find(([k]) =>
    new RegExp(k).test(req.url)
  )

  if (!cacheRule) return handleRoute(req, res)

  const [, cacheRuleCond] = cacheRule

  if (!cacheRuleCond) return handleRoute(req, res)

  if (ssrCache.has(req.url)) {
    return res.send(ssrCache.get(req.url))
  }

  handleRoute(req, res, true)
}

app.prepare().then(() => {
  const server = express()

  server.use(renderAndCache)

  server.listen(port, host, err => {
    if (err) throw err
    console.log(`> Ready on http://${host}:${port}`)
  })
})
