const express = require('express')
const router = express.Router()

const courseController = require('../app/controllers/CourseController')
router.get('/create', courseController.create)
router.post('/store', courseController.store)
router.get('/:id/edit', courseController.edit)
router.post('/handle-form-action', courseController.handleFormActions)
router.get('/:slug', courseController.show)
router.put('/:id', courseController.update)
router.post('/:id', courseController.delete)
router.post('/:id/restore', courseController.restore)
router.post('/:id/force', courseController.force)

module.exports = router
