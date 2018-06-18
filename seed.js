const express = require('express');
const db = require('./models');

const app = express();

db.sync({force: true})
    .then(() => {
        console.log('Database Synced!')
    })
    .catch(err => {
        console.log(err);
    })
    .finally(() => {
        db.close();
    });