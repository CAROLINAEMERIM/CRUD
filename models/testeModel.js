const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Teste = sequelize.define('Teste', {
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING
}, {
    tableName: 'teste',
    timestamps: false
});

module.exports = Teste;
