const express = require('express');
const router = express.Router();
const routes = require('./routes');

app.use(routes); // Connect all the routes

router.get('/hello/world', function (req, res) {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.send('Hello World!');
});


module.exports = {router, app};

