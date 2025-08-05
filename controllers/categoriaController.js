// CategoriaController.js
const Categoria = require('../models/Categoria');

const categoriaController = {
    async createCategoria(req, res) {
        try {
            const { nome } = req.body;
            await Categoria.create({ nome });
            res.redirect('/categorias');
        } catch (err) {
            res.status(500).json({ error: err });
        }
    },

    async getCategoriaById(req, res) {
        try {
            const categoria = await Categoria.findByPk(req.params.id);
            if (!categoria) return res.status(404).json({ message: 'Categoria não encontrada' });
            res.render('categorias/show', { categoria });
        } catch (err) {
            res.status(500).json({ error: err });
        }
    },

    async getAllCategorias(req, res) {
        try {
            const categorias = await Categoria.findAll();
            res.render('categorias/index', { categorias });
        } catch (err) {
            res.status(500).json({ error: err });
        }
    },

    renderCreateForm(req, res) {
        res.render('categorias/create');
    },

    async renderEditForm(req, res) {
        try {
            const categoria = await Categoria.findByPk(req.params.id);
            if (!categoria) return res.status(404).json({ message: 'Categoria não encontrada' });
            res.render('categorias/edit', { categoria });
        } catch (err) {
            res.status(500).json({ error: err });
        }
    },

    async updateCategoria(req, res) {
        try {
            await Categoria.update({ nome: req.body.nome }, { where: { id: req.params.id } });
            res.redirect('/categorias');
        } catch (err) {
            res.status(500).json({ error: err });
        }
    },

    async deleteCategoria(req, res) {
        try {
            await Categoria.destroy({ where: { id: req.params.id } });
            res.redirect('/categorias');
        } catch (err) {
            res.status(500).json({ error: err });
        }
    }
};

module.exports = categoriaController;
