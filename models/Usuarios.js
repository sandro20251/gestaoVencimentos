const { DataTypes } = require('sequelize');
const db = require('../db/conexao');

const Usuarios = db.define('Usuarios', {
    user: {
        type: DataTypes.STRING
    },
    senha: {
        type: DataTypes.STRING
    }
})

module.exports = Usuarios;