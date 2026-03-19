const { DataTypes } = require('sequelize');
const db = require('../db/conexao');
const Usuarios = require('../models/Usuarios')

const Vencimentos = db.define('Vencimentos', {
    ean: {
        type: DataTypes.STRING
    },
    produto: {
        type: DataTypes.STRING
    },
    fornecedor: {
        type: DataTypes.STRING
    },
    quantidade: {
        type: DataTypes.INTEGER
    },
    data: {
        type: DataTypes.DATE
    }


})

Usuarios.hasMany(Vencimentos);
Vencimentos.belongsTo(Usuarios);

module.exports = Vencimentos;