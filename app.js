require('dotenv').config()
const express = require('express')
const routes = require('./src/routes')

const app = express()
const port = process.env.PORT
const host = process.env.DB_HOST

routes(app)

app.listen(port, () => {
    console.log(`Servidor rodando em: http://${host}:${port}`)
})

module.exports = app