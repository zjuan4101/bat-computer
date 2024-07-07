const express = require('express')
const router = express.Router()
const superhumanController = require('../../controllers/api/superhumans')
const userController = require('../../controllers/api/users')
// create
router.post('/', userController.auth, superhumanController.create)
// index
router.get('/', superhumanController.index)
// show
router.get('/:id', superhumanController.show)
// update
router.put('/:id', superhumanController.update)
// delete
router.delete('/:id', superhumanController.destroy)

module.exports = router