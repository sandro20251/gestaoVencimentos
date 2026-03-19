const express = require('express');
const router = express.Router();
const usuarios = require('../models/Usuarios');
const Usuarios = require('../models/Usuarios');
// Rota para abrir o formulário para cadastrar novo usuário;
router.get('/cadastrar', (req, res) => {
    res.render('novoUsuario')
})
// Rota para salvar novo usuário
router.post('/novoUsuario', async (req, res) => {
    const user = req.body.user;
    const senha = req.body.senha;
    const senha2 = req.body.senha2;
    if (senha === senha2) {
        await Usuarios.create({
            user,
            senha,
        })
        res.redirect('/');
    } else {
        const mensagemErro = "Não foi possível criar o novo usuário pois as senhas são diferentes"
        res.render('erro', { mensagemErro })
    }

})

module.exports = router;