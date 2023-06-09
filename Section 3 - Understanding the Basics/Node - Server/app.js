const http = require('http');
const fs = require('fs');


// function rqListener(req, res) {

// }

// http.createServer(rqListener);


/////////// simple request and response
// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method, req.headers);
//     // process.exit();
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page.</title></head>');
//     res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
//     res.write('</html>');
//     res.end();
// });

/////////////// routing response
// const server = http.createServer((req, res) => {
//     const url = req.url;
//     if ( url === '/' ) {
//         res.write('<html>');
//         res.write('<head><title>Enter Message</title></head>');
//         res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
//         res.write('</html>');
//         return res.end();
//     }
//     console.log(req.url, req.method, req.headers);
//     // process.exit();
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page.</title></head>');
//     res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
//     res.write('</html>');
//     res.end();
// });



//////////////////// redirecting requests

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;
//     if ( url === '/' ) {
//         res.write('<html>');
//         res.write('<head><title>Enter Message</title></head>');
//         res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
//         res.write('</html>');
//         return res.end();
//     }
//     if (url === '/message' && method === 'POST') {
//         fs.writeFileSync('message.txt', 'DUMMY');
//         res.statusCode = 302;
//         res.setHeader('Location', '/');
//         return res.end();
//     }

//     console.log(req.url, req.method, req.headers);
//     // process.exit();
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page.</title></head>');
//     res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
//     res.write('</html>');
//     res.end();
// });



///////////////////// Parsing request bodies

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;
//     if ( url === '/' ) {
//         res.write('<html>');
//         res.write('<head><title>Enter Message</title></head>');
//         res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
//         res.write('</html>');
//         return res.end();
//     }
//     if (url === '/message' && method === 'POST') {
//         const body = [];
//         req.on('data', (chunk) => {
//             console.log(chunk);
//             body.push(chunk);
//         }); //listen to ceratain events i.e. event listener is data here

//         req.on('end', () => {
//             const parsedBody = Buffer.concat(body).toString();
//             console.log(parsedBody);

//             const message = parsedBody.split('=')[1];
//             fs.writeFileSync('message.txt', message);
//         });

//         res.statusCode = 302;
//         res.setHeader('Location', '/');
//         return res.end();
//     }

//     //console.log(req.url, req.method, req.headers);
//     // process.exit();
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page.</title></head>');
//     res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
//     res.write('</html>');
//     res.end();
// });



///////////////////// Understanding Event Driven Code Execution   AND Blocking and Non-Blocking Code

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;
//     if ( url === '/' ) {
//         res.write('<html>');
//         res.write('<head><title>Enter Message</title></head>');
//         res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
//         res.write('</html>');
//         return res.end();
//     }
//     if (url === '/message' && method === 'POST') {
//         const body = [];
//         req.on('data', (chunk) => {
//             console.log(chunk);
//             body.push(chunk);
//         }); //listen to ceratain events i.e. event listner is data here

//         return req.on('end', () => {
//             const parsedBody = Buffer.concat(body).toString();
//             console.log(parsedBody);

//             const message = parsedBody.split('=')[1];
//             fs.writeFile('message.txt', message, (err) => {
//                 res.statusCode = 302;
//                 res.setHeader('Location', '/');
//                 return res.end();
//             }); 
            
//             // writeFileSync block the execution of next line code until this line code will not be execuuted, while write File is not blocking th execution
//         });

//     }

//     //console.log(req.url, req.method, req.headers);
//     // process.exit();
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page.</title></head>');
//     res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
//     res.write('</html>');
//     res.end();
// });



//////////////////// Using the Node Modules System

const routes = require('./routes');

console.log(routes.sometext);

const server = http.createServer(routes.handler);

server.listen(3000);