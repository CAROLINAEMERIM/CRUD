const Vestuario = require('../models/vestuarioModel');

const vestuarioController = {

    createVestuario: (req, res) => {
        const newVestuario = {
            nome: req.body.nome,
            descricao: req.body.descricao
        };

        Vestuario.create(newVestuario, (err, vestuarioId) => {
            if (err) return res.status(500).json({ error: err });
            res.redirect('/vestuario');
        });
    },

    getVestuarioById: (req, res) => {
        const vestuarioId = req.params.id;

        Vestuario.findById(vestuarioId, (err, vestuario) => {
            if (err) return res.status(500).json({ error: err });
            if (!vestuario) return res.status(404).json({ message: 'Vestuário não encontrado' });
            res.render('vestuario/show', { vestuario });
        });
    },

    getAllVestuarios: (req, res) => {
        Vestuario.getAll((err, vestuarios) => {
            if (err) return res.status(500).json({ error: err });
            res.render('vestuario/index', { vestuarios });
        });
    },

    renderCreateForm: (req, res) => {
        res.render('vestuario/create');
    },

    renderEditForm: (req, res) => {
        const vestuarioId = req.params.id;

        Vestuario.findById(vestuarioId, (err, vestuario) => {
            if (err) return res.status(500).json({ error: err });
            if (!vestuario) return res.status(404).json({ message: 'Vestuário não encontrado' });
            res.render('vestuario/edit', { vestuario });
        });
    },

    updateVestuario: (req, res) => {
        const vestuarioId = req.params.id;

        const updatedVestuario = {
            nome: req.body.nome,
            descricao: req.body.descricao
        };

        Vestuario.update(vestuarioId, updatedVestuario, (err) => {
            if (err) return res.status(500).json({ error: err });
            res.redirect('/vestuario');
        });
    },

    deleteVestuario: (req, res) => {
        const vestuarioId = req.params.id;

        Vestuario.delete(vestuarioId, (err) => {
            if (err) return res.status(500).json({ error: err });
            res.redirect('/vestuario');
        });
    }
};

module.exports = vestuarioController;