const newsRouter = require('./news');
const stiteRouter = require('./stie');
function routes(app) {
    app.use('/news', newsRouter);
    app.use('/', stiteRouter);
}

module.exports = routes;
