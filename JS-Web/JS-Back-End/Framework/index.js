const express = require('express');

const expressConfig = require('./config/express');
const databaseConfig = require('./config/database');
const routesConfig = require('./config/routes');
 
start();

// TODO (1) install npm dependencies

async function start() {
    const app = express();

    expressConfig(app);
    await databaseConfig(app);
    routesConfig(app);

    // TODO (2) remove from project
    app.get('/', (req, res) => res.render('home'));

    app.listen(3000, () => console.log('Server started on port 3000'));
}