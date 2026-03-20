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

// rota para cadstrar novo vencimetno

router.post('/add/:id', async (req, res) => {
    const id = req.params.id;
    const ean = req.body.ean;
    const produto = req.body.produto;
    const fornecedor = req.body.fornecedor;
    const quantidade = req.body.quantidade;
    const data = req.body.dataVencimento;

    await Vencimentos.create({
        ean: ean,
        produto: produto,
        fornecedor: fornecedor,
        quantidade: quantidade,
        data: data,
        UsuarioId: id
    })
    res.redirect('/');
})

// Rota para vizualizar meus vencimentos

router.get('/views/:id', async (req, res) => {
    const id = req.params.id;
    const vencimentos = await Vencimentos.findAll({
        raw: true, where: {
            UsuarioId: id
        }
    })
    res.render('exibirVencimentos', { vencimentos });
})

// Rota para vizualizar um vencimento específico
router.get('/venc/:id', async (req, res)=>{
    const id = req.params.id;
    const vencimento = await Vencimentos.findOne({raw:true, where:{id:id}});
   
    res.render('detalhesVencimento', {vencimento});
})

module.exports = router;