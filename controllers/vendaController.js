// VendaController.js
const Venda = require('../models/Venda');

const vendaController = {
    async createVenda(req, res) {
        try {
            const { data, valor, quantidade, produto_id } = req.body;
            await Venda.create({ data, valor, quantidade, produto_id });
            res.redirect('/vendas');
        } catch (err) {
            res.status(500).json({ error: err });
        }
    },

    async getVendaById(req, res) {
        try {
            const venda = await Venda.findByPk(req.params.id);
            if (!venda) return res.status(404).json({ message: 'Venda não encontrada' });
            res.render('vendas/show', { venda });
        } catch (err) {
            res.status(500).json({ error: err });
        }
    },

    async getAllVendas(req, res) {
        try {
            const vendas = await Venda.findAll();
            res.render('vendas/index', { vendas });
        } catch (err) {
            res.status(500).json({ error: err });
        }
    },

    renderCreateForm(req, res) {
        res.render('vendas/create');
    },

    async renderEditForm(req, res) {
        try {
            const venda = await Venda.findByPk(req.params.id);
            if (!venda) return res.status(404).json({ message: 'Venda não encontrada' });
            res.render('vendas/edit', { venda });
        } catch (err) {
            res.status(500).json({ error: err });
        }
    },

    async updateVenda(req, res) {
        try {
            const { data, valor, quantidade, produto_id } = req.body;
            await Venda.update({ data, valor, quantidade, produto_id }, { where: { id: req.params.id } });
            res.redirect('/vendas');
        } catch (err) {
            res.status(500).json({ error: err });
        }
    },

    async deleteVenda(req, res) {
        try {
            await Venda.destroy({ where: { id: req.params.id } });
            res.redirect('/vendas');
        } catch (err) {
            res.status(500).json({ error: err });
        }
    }
};

module.exports = vendaController;
