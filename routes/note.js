const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const noteCtrl = require('../controllers/note');

router.get('/', auth, noteCtrl.getAllNotes);
router.post('/', auth, noteCtrl.createNote);
router.post('/test', auth, multer, noteCtrl.test);
router.get('/:id', auth, noteCtrl.getOneNote);
router.put('/:id', auth, noteCtrl.modifyNote);
router.delete('/:id', auth, noteCtrl.deleteNote);

module.exports = router;