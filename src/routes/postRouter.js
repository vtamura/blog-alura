const express = require('express')
const router = express.Router()
const postController = require('../controller/postController')

router.post('/posts', postController.inserePost)
router.get('/posts', postController.listaPosts)
router.delete('/posts/:id', postController.deletaPost)

module.exports = router