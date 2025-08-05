const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Vestuario = sequelize.define('Vestuario', {
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING
}, {
    tableName: 'vestuario',
    timestamps: false
});

module.exports = Vestuario;
