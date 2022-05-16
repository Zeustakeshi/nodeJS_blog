const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const routes = require('./routes');

const app = express();
const port = 2312;

// config static file
app.use(express.static(path.join(__dirname, 'public')));

// Template engine
app.engine('.hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// init Routes
routes(app);

app.listen(port, () => {
    //console.log(`Example app listening on port ${port}`);
});
