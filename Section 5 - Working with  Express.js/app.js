const express = require('express');

const app = express();


////////////// Middleware

// app.use((req, res, next) => {
//     console.log("In the middleware");
//     next(); //Allows the request to continue to the next middleware in line
// });

// app.use((req, res, next) => {
//     console.log("In another middleware");
//     res.send('<h1>Hello Form Express</h1>');
// });


/////////////// Handeling different routes

app.use('/', (req, res, next) => {
    console.log('This always runs!');
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log("In another middleware");
    res.send('<h1>Add product page</h1>');
});

app.use('/', (req, res, next) => {
    console.log("In another middleware");
    res.send('<h1>Hello Form Express</h1>');
});

// const server = http.createServer(app);

app.listen(3001);  // this will aoutomatically return http.createServer(app);