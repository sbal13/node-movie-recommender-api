
const app = require('express')();
const bodyParser = require('body-parser')
const router = require('./api/router');
const port = 3000;

/* initialize api routes */
app.use(bodyParser.json())
app.use(router.init());
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
