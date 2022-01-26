const http = require('http');

const router = require('./router');
const {html} = require('./util');

const homePage = `
<h1>Home Page</h1>
<p>This is the home page</p>`;

const aboutPage = `
<h1>About Page</h1>
<p>Information about this page</p>`;

const catalogPage = `
<h1>Catalog Page</h1>
<p>Catalog list</p>`;

const server = http.createServer(router.main);

router.register('/', homeControler);
router.register('/about', aboutControler);
router.register('/catalog', catalogControler);

server.listen(3000);

function homeControler(req, res) {
    res.write(html(homePage));
    res.end();
}

function aboutControler(req, res) {
    res.write(html(aboutPage));
    res.end();
}

function catalogControler(req, res) {
    res.write(html(catalogPage));
    res.end();
}