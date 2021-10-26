const Course = require('../models/Course')
const { mongooseToObject } = require('../../util/mongoose')
class CourseController {
  //   Get /news

  show(req, res, next) {
    // res.send(req.params.slug)
    Course.findOne({ _id: req.params.slug })
      .then((course) => {
        res.render('courses/show', { course: mongooseToObject(course) })
      })
      .catch(next)
  }
  create(req, res, next) {
    res.render('courses/create')
  }
  edit(req, res, next) {
    Course.findById(req.params.id).then((course) =>
      res.render('courses/edit', {
        course: mongooseToObject(course),
      })
    )
  }
  store(req, res, next) {
    const formData = req.body
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/default.jpg`
    const course = new Course(formData)
    course.save().then(() => res.redirect('/me/stored/courses').catch(next))
  }
  update(req, res, next) {
    // res.send(req.params.id)
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next)
  }
  delete(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next)
  }
  // [Patch] /course/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next)
  }
  // [Delete] /course/:id/force
  force(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next)
  }
  // Post /courses/handle-form-action
  handleFormActions(req, res, next) {
    switch (req.body.action) {
      case 'delete':
        Course.delete({ _id: { $in: req.body.courseIds } })
          .then(() => res.redirect('back'))
          .catch(next)
        break
      default:
        req.json({ message: 'Action is invalid' })
    }
  }
}

module.exports = new CourseController()
