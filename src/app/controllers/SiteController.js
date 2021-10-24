const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')
class SiteController {
  //   Get /news
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render('home', { courses: multipleMongooseToObject(courses) })
      })
      .catch((error) => next(error))
  }
  //   Get /news:slug
  search(req, res) {
    res.render('search')
  }
}

module.exports = new SiteController()
