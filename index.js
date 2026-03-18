// Módulos externos principais
const express = require('express');
const exphbs = require('express-handlebars');

// Módulo de desenvolvedor
const chalk = require('chalk');

// porta
const porta = 3000;

// aplicação

const app = express();

// middlewares
// req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
// pastas estaticas
app.use(express.static('public'))

// rota inicial

app.get('/', (req, res) => {
    res.render('inicio');
})

app.listen(porta, () => {
    console.log(`O express está escutando a porta ${porta}`);
})