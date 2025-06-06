const express = require('express');
const router = express.Router();
const testeController = require('../controllers/testeController');

router.get('/view', testeController.listView); // Esta linha deve vir antes!
router.get('/', testeController.getAll);
router.get('/:id', testeController.getById);
router.post('/', testeController.create);
router.put('/:id', testeController.update);
router.delete('/:id', testeController.delete);

module.exports = router;