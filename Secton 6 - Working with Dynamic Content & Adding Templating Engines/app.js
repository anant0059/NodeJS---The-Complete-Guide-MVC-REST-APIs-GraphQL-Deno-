const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// const rootDir = require('./util/path');

const app = express();

app.set('view engine', 'pug'); //set pug as default templating engine
app.set('views', 'views'); //set views as default path for the pub files

const adminData = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));

    res.status(404).render('404');
})

// const server = http.createServer(app);

app.listen(3000);  // this will aoutomatically return http.createServer(app);