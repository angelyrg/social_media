const express = require('express')
const router = express.Router()

const postController = require('../controllers/post.controler')

router
    .get('/', postController.get)
    .get('/:id', postController.getById)
    .post('/', postController.create)
    .put('/:id', postController.update)
    .delete('/:id', postController._delete)

module.exports = router
