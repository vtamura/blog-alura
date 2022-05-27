const express = require('express')
const postRouter = require('./postRouter')
const usuarioRouter = require('./usuarioRouter')

module.exports = app => {
    app.use(
        express.json(),
        postRouter,
        usuarioRouter
    ),

    app.get('/', (req, res) => {
        res.send('Olá mundo!')
    })
}
