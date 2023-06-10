const express = require("express");

const app = express();

// app.use((req, res, next) => {
//     console.log("First Middleware");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("Second Middleware");
//     res.send('<h1>Assignmnt 1st part solveed</h1>');
// });


app.use('/users', (req, res, next) => {
    console.log("/users middlware");
    res.send('<p>The middleware that handles just /users </p>');
});

app.use('/', (req, res, next) => {
    console.log("/ middlware");
    res.send('<p>The middleware that handles just / </p>');
});


app.listen(3000);