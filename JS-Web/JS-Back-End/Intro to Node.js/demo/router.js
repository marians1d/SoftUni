const {html} = require('./util');

const routes = {};

function main(req, res) {
    console.log('>>> ' + req.method, req.url);

    const url = new URL(req.url, 'http://' + req.headers.host);

    const handler = routes[url.pathname];
    if (typeof handler == 'function') {
        handler(req, res);
    } else {
        defaultControler(req, res);
    }

    res.end();
}

function register(pathname, handler) {
    routes[pathname] = handler;
}

const defaultPage = `
<h1>404 Not found</h1>
<p>The page you are tring to acsess does not exist</p>`;

function defaultControler(req, res) {
    res.statusCode = 404;
    res.write(html(defaultPage));
    res.end();
}

module.exports = {
    main,
    register,
};