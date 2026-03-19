const express = require('express');
const router = express.Router();
const usuarios = require('../models/Usuarios');
const Usuarios = require('../models/Usuarios');
const index = require('../index')
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

// Rota para abrir formulário de login

router.get('/login', async (req, res) => {
    await res.render('login');
})

// Rota para validar login
router.post('/entrar', async (req, res) => {
    const user2 = req.body.user3;
    const senha = req.body.senha3;

    const usuarioProcurado = await Usuarios.findOne({
        raw: true, where: {
            user: user2
        }
    })
    console.log(senha);
    if (usuarioProcurado.senha === senha) {
        index.login = true;
        console.log(index.login)
        index.pessoa = `${usuarioProcurado.user}`;
        const pessoa2 = usuarioProcurado;
        
        res.render('inicioLogado', { pessoa2 })
    } else {
        mensagem = "Usuário e senha não conferem ";
        res.render('erro', { mensagem });
    }


})

module.exports = router;