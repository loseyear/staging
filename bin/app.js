const Koa = require('koa')
const path = require('path')
const serve = require('koa-static')

const webpackMiddleware = require('koa-webpack')
const Webpack = require('webpack')

const webpackConfig = require('../build/dev.config')
const render = require('./render')

const app = new Koa()

if (process.env.NODE_ENV === 'development') {
  webpackMiddleware({
    compiler: Webpack(webpackConfig),
    config: webpackConfig
  })
  .then((middleware) => {
    app.use(middleware)
  })
}

app.use(serve(path.resolve(__dirname, './../asset')))
app.use(async (ctx, next) => {
  return await render(ctx, next)
  await next()
})

app.listen(9527)

