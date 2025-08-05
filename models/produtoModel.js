const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Produto = sequelize.define('Produto', {
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    preco: DataTypes.FLOAT,
    quantidade: DataTypes.INTEGER,
    categoria: DataTypes.INTEGER
}, {
    tableName: 'produtos',
    timestamps: false
});

module.exports = Produto;
