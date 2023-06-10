const http = require('http');
const fs = require('fs');

const server = http.createServer( (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>User Lists</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    else if(url === '/users') {
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>User Lists</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    else if(url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        }); //listen to certain events i.e. event listner is data here
    
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
    
            const message = parsedBody.split('=')[1];
            console.log(message);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
});

server.listen(3000);