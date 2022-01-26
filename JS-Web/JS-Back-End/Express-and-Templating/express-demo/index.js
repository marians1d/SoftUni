const express = require('express');

const app = express();

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.post('/create', (req, res) => {
    res.status(201);
    res.send('Article created')
});

app.listen(3000);