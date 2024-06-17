const express = require('express')
const router = express.Router()

const commentController = require('../controllers/comment.controler')

router
    .get('/', commentController.get)
    .get('/:id', commentController.getById)
    .post('/', commentController.create)
    .put('/:id', commentController.update)
    .delete('/:id', commentController._delete)

module.exports = router
