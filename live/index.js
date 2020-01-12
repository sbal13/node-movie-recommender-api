
const app = require('express')();
const router = require('./api/router');

/* initialize api routes */
app.use(router.init());


module.exports = app;
