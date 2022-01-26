const express = require('express');
const handlebars = require('express-handlebars');
const app = express();

const hbs = handlebars.create({
    extname: '.hbs'
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

let visitors = 0;

const products = [
    { name: 'Lamp', price: 24 },
    { name: 'Weel', price: 100 },
    { name: 'Mug', price: 4 },
    { name: 'Book', price: 12 }
];

app.get('/', (req, res) => {
    res.locals = {
        count: visitors++
    }
    res.render('home');
});

app.get('/catalog', (req, res) => {
    res.locals = {
        products
    }
    res.render('catalog');
});

app.listen(3000);