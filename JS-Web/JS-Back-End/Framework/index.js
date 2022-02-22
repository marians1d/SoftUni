const express = require('express');

const expressConfig = require('./config/express');
const databaseConfig = require('./config/database');
const routesConfig = require('./config/routes');
 
start();

// TODO install npm dependencies

async function start() {
    const app = express();

    expressConfig(app);
    await databaseConfig(app);
    routesConfig(app);

    // TODO: remove from project
    app.get('/', (req, res) => res.render('home'));

    app.listen(3000, () => console.log('Server started on port 3000'));
}