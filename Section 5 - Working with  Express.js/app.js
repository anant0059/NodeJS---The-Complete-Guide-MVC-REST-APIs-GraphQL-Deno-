const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const rootDir = require('./util/path');

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

// app.use('/', (req, res, next) => {
//     console.log('This always runs!');
//     next();
// });

// app.use('/add-product', (req, res, next) => {
//     console.log("In another middleware");
//     res.send('<h1>Add product page</h1>');
// });

// app.use('/', (req, res, next) => {
//     console.log("In another middleware");
//     res.send('<h1>Hello Form Express</h1>');
// });

// // const server = http.createServer(app);

// app.listen(3001);  // this will aoutomatically return http.createServer(app);




// /////////////// Parsing incoming request

// app.use(bodyParser.urlencoded({extended: false}));

// app.use('/', (req, res, next) => {
//     // console.log('This always runs!');
//     next();
// });

// app.use('/add-product', (req, res, next) => {
//     // console.log("In another middleware");
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">submit</button></form>');
// });

// app.post('/product', (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');
// });

// app.use('/', (req, res, next) => {
//     // console.log("In another middleware");
//     res.send('<h1>Hello Form Express</h1>');
// });



///////////////// Using express router

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');


app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', '404.html'));
})

// const server = http.createServer(app);

app.listen(3001);  // this will aoutomatically return http.createServer(app);