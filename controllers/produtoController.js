const Produto = require('../models/Produto');
const Categoria = require('../models/Categoria');

const produtoController = {
    async createProduto(req, res) {
        try {
            const { nome, descricao, preco, quantidade, categoria } = req.body;
            await Produto.create({ nome, descricao, preco, quantidade, categoria });
            res.redirect('/produtos');
        } catch (err) {
            res.status(500).json({ error: err });
        }
    },

    async getProdutoById(req, res) {
        try {
            const produto = await Produto.findByPk(req.params.id, {
                include: { model: Categoria, as: 'categoriaDetalhe' }
            });
            if (!produto) return res.status(404).json({ message: 'Produto não encontrado' });
            res.render('produtos/show', { produto });
        } catch (err) {
            res.status(500).json({ error: err });
        }
    },

    async getAllProdutos(req, res) {
        try {
            const where = req.query.categoria ? { categoria: req.query.categoria } : {};
            const produtos = await Produto.findAll({ where });
            const categorias = await Categoria.findAll();
            res.render('produtos/index', { produtos, categorias, categoriaSelecionada: req.query.categoria || null });
        } catch (err) {
            res.status(500).json({ error: err });
        }
    },

    async renderCreateForm(req, res) {
        try {
            const categorias = await Categoria.findAll();
            res.render('produtos/create', { categorias });
        } catch (err) {
            res.status(500).json({ error: err });
        }
    },

    async renderEditForm(req, res) {
        try {
            const produto = await Produto.findByPk(req.params.id);
            const categorias = await Categoria.findAll();
            if (!produto) return res.status(404).json({ message: 'Produto não encontrado' });
            res.render('produtos/edit', { produto, categorias });
        } catch (err) {
            res.status(500).json({ error: err });
        }
    },

    async updateProduto(req, res) {
        try {
            const { nome, descricao, preco, quantidade, categoria } = req.body;
            await Produto.update({ nome, descricao, preco, quantidade, categoria }, { where: { id: req.params.id } });
            res.redirect('/produtos');
        } catch (err) {
            res.status(500).json({ error: err });
        }
    },

    async deleteProduto(req, res) {
        try {
            await Produto.destroy({ where: { id: req.params.id } });
            res.redirect('/produtos');
        } catch (err) {
            res.status(500).json({ error: err });
        }
    }
};

module.exports = produtoController;
