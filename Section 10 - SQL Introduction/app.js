const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const rootDir = require('./util/path');

const errorController = require('./controllers/error');

const db = require('./util/database');

const app = express();


app.set('view engine', 'ejs'); //set ejs as default templating engine
app.set('views', 'views'); //set views as default path for the ejs files

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

// db.execute('SELECT * FROM products')
//     .then(result => {
//         console.log(result[0], result[1]);
//     })
//     .catch(err => {
//         console.log(err);
//     });

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// const server = http.createServer(app);

app.listen(3000);  // this will aoutomatically return http.createServer(app);