const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()
const app = express()

const port = process.env.PORT || 3000

const routerApi = require('./routes')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`Lista de endpoints: <br><br>
        USERS:
        <ul>
            <li><a href="/api/users">GET all users</a></li>
            <li><a href="/api/users/1">GET one user</a></li>
        </ul>
        <br>
        POSTS:
        <ul>
            <li><a href="/api/posts">GET all posts</a></li>
            <li><a href="/api/posts/1">GET one post</a></li>
        </ul>
        <br>
        COMMENT:
        <ul>
            <li><a href="/api/comments">GET all comments</a></li>
            <li><a href="/api/comments/1">GET one comment</a></li>
        </ul>
        `)
})

routerApi(app)

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`)
})
