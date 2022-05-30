const express = require('express')
const router = express.Router()
const passport = require('passport')
const usuarioController = require('../controller/usuarioController')

router.get('/usuarios', usuarioController.listaUsuarios)
router.post('/usuarios/login', passport.authenticate('local', { session: false }), usuarioController.login)
router.post('/usuarios', usuarioController.insereUsuario)
router.post('/usuarios/email', usuarioController.buscaUsuarioPorEmail)
router.delete('/usuarios/:id', usuarioController.deletaUsuario)

module.exports = router