const express = require('express')
const passport = require('passport')
const postRouter = require('./postRouter')
const usuarioRouter = require('./usuarioRouter')

module.exports = app => {
    app.use(
        // express.json(),
        // passport.initialize(),
        postRouter,
        usuarioRouter
    ),

    app.get('/', (req, res) => {
        res.send('Olá mundo!')
    })
}
