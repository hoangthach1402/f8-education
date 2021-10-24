const newRouter = require('./news')
const siteRouter = require('./site')
const couseRouter = require('./courses')
function route(app) {
  app.use('/courses', couseRouter)
  app.use('/news', newRouter)
  app.use('/', siteRouter)
}

module.exports = route
