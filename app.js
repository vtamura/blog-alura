require('dotenv').config()
const express = require('express')
const routes = require('./src/routes')
const bodyParser = require('body-parser')
const passport = require('passport')
require('./src/middleware/autenticacao')(passport)

const app = express()
const port = process.env.PORT
const host = process.env.DB_HOST

app.use(passport.initialize())

app.use(
    bodyParser.urlencoded({
        extended: true
    }),
    bodyParser.json()
)

routes(app)

app.listen(port, () => {
    console.log(`Servidor rodando em: http://${host}:${port}`)
})

module.exports = app