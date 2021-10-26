const newRouter = require('./news')
const siteRouter = require('./site')
const couseRouter = require('./courses')
const productRouter = require('./products')
const meRouter = require('./me')
function route(app) {
  app.use('/me', meRouter)
  app.use('/courses', couseRouter)
  app.use('/news', newRouter)
  app.use('/', siteRouter)
  app.use('/products', productRouter)
}

module.exports = route
