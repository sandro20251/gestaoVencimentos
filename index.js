// Módulos externos principais
const express = require('express');
const exphbs = require('express-handlebars');

// Módulo de desenvolvedor
const chalk = require('chalk');

// modulos internos
const db = require('./db/conexao');

// porta
const porta = 3000;

// aplicação

const app = express();

// constantes de seção

const pessoa = null;
const logado = false;

// middlewares
// req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
// pastas estaticas
app.use(express.static('public'))

// rotas
app.use('/user', require('./rotas/usuarios'));
app.use('/vencimentos', require('./rotas/vencimentos'));

// rota inicial

app.get('/', (req, res) => {
    res.render('inicio');
})

db.sync()
    .then(() => {
        app.listen(porta, () => {
            console.log(`O express está escutando a porta ${porta}`);
        })
    })
