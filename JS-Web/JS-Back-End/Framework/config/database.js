const mongoose = require('mongoose');


// TODO (1): change database name
const dataBaseName = 'test';

const connectionString = `mongodb://localhost:27017/${dataBaseName}`;

module.exports = async (app) => {
    try {
        await mongoose.connect(connectionString, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });

        console.log('Database connected');

        mongoose.connection.on('error', (err) => {
            console.error('Database error');
            console.error(err);
        });
    } catch (err) {
        console.error('Error connecting to database');
        process.exit(1);
    }
};