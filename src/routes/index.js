const express = require('express')
const userRouter = require('./user.routes')
const postRouter = require('./post.routes')
const commentRouter = require('./comment.routes')

function routerApi(app) {
    const router = express.Router()
    app.use('/api', router)
    router.use('/users', userRouter)
    router.use('/posts', postRouter)
    router.use('/comments', commentRouter)
}

module.exports = routerApi
