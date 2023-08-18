const express = require('express')

const router = express.Router();

const logsController = require('../controllers/logsController');

router.get('/logs', logsController.index)

// "new" route
router.get('/new', logsController.new)

// "create" route
router.post('/logs', logsController.create)

// edit route
router.get('/logs/:id/edit', logsController.edit)

// "show" route
router.get('/logs/:id', logsController.show)

//delete route
router.delete('/logs/:id', logsController.delete)

// "update" route
router.put('/logs/:id', logsController.update)

module.exports = router
