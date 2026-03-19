const express = require('express');
const router = express();
const Usuarios = require('../models/Usuarios');
const Vencimentos = require('../models/Vencimentos');

// Rota para abria pagina de cadastrar vencimentos

router.get('/cadastrar/:id', async (req, res) => {
    const id = req.params.id;
    console.log(id);
    res.render('cadastrarVencimentos', { id });
})

module.exports = router;