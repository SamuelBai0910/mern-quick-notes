const express = require('express');
const router = express.Router();
const notesController = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, notesController.index);
router.post('/', ensureLoggedIn, notesController.create);

module.exports = router;