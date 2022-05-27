const express = require('express')
const router = express.Router()
const usuarioController = require('../controller/usuarioController')

router.post('/usuarios', usuarioController.insereUsuario)
router.get('/usuarios', usuarioController.listaUsuarios)
router.delete('/usuarios/:id', usuarioController.deletaUsuario)

module.exports = router