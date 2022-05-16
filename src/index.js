const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 2312;
// Template engine
app.engine('.hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    //console.log(`Example app listening on port ${port}`);
});