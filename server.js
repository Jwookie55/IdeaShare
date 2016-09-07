const express = require('express');
const mongoose = require('mongoose');
const eventCon = require('./controllers/eventcontroller');
const path = require('path');

const app = express();

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.get('/home', eventCon.home);
app.post('/submit', eventCon.submit);
app.post('/comment', eventCon.comment);
app.use(express.static(path.join(__dirname + '/./')));

app.listen(3000, () => console.log('listening on localHost3000'));
