const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressHbs = require('express-handlebars');
// const rootDir = require('./util/path');

const app = express();

app.engine(
    'hbs', 
    expressHbs({
        layoutsDir: 'views/layouts/', 
        
        defaultLayout: 'main-layout', 
        extname: 'hbs'
    })
); 
app.set('view engine', 'hbs'); //set handlebara as default templating engine
app.set('views', 'views'); //set views as default path for the handlebara files

const adminData = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));

    res.status(404).render('404', {pageTitle: "Page Not Found"});
})

// const server = http.createServer(app);

app.listen(3000);  // this will aoutomatically return http.createServer(app);