const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Categoria = sequelize.define('Categoria', {
    nome: DataTypes.STRING
}, {
    tableName: 'categorias',
    timestamps: false
});

module.exports = Categoria;
