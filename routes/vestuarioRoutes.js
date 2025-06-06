const express = require('express');
const vestuarioController = require('../controllers/vestuarioController');
const router = express.Router();

router.get('/', vestuarioController.getAllVestuarios);
router.get('/new', vestuarioController.renderCreateForm);
router.post('/', vestuarioController.createVestuario);
router.get('/:id', vestuarioController.getVestuarioById);
router.get('/:id/edit', vestuarioController.renderEditForm);
router.put('/:id', vestuarioController.updateVestuario);
router.delete('/:id', vestuarioController.deleteVestuario);

module.exports = router;