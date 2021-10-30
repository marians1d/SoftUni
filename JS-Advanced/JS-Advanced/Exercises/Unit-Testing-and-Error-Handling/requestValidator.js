function solve(obj) {
    const validMothods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    const uriPattern = /(^[\w.]+$)/;
    const messagePattern = /([<>\\&'"])/;

    if (!validMothods.includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!obj.uri || obj.uri != '*' && !uriPattern.test(obj.uri)) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!validVersions.includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (messagePattern.test(obj.message) || obj.message == undefined) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return obj;
}

console.log(
    solve({
        method: 'POST',
        uri: 'home.bash',
        version: 'HTTP/2.0'
    })
);
