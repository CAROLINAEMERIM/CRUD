const Teste = require('../models/testeModel');

exports.getAll = (req, res) => {
    Teste.getAll((err, testes) => {
        if (err) return res.status(500).send(err);
        res.json(testes);
    });
};

exports.getById = (req, res) => {
    Teste.findById(req.params.id, (err, teste) => {
        if (err) return res.status(500).send(err);
        if (!teste) return res.status(404).send('Registro não encontrado');
        res.json(teste);
    });
};

exports.create = (req, res) => {
    Teste.create(req.body, (err, id) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({ id });
    });
};

exports.update = (req, res) => {
    Teste.update(req.params.id, req.body, (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Registro atualizado' });
    });
};

exports.delete = (req, res) => {
    Teste.delete(req.params.id, (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Registro removido' });
    });
};

exports.listView = (req, res) => {
    const Teste = require('../models/testeModel');
    Teste.getAll((err, testes) => {
        if (err) return res.status(500).send(err);
        res.render('teste/list', { testes });
    });
};