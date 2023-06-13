// const products = [];

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    // console.log("In another middleware");
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

    res.render('add-product', {
        pageTitle:'Add Product', 
        path: '/admin/add-product',
        activeAddProduct: true,
        productCSS: true,
        formCSS: true
    });
}

exports.postAddProduct = (req, res, next) => {
    // console.log(req.body);
    // products.push({title: req.body.title});

    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    // console.log("In another middleware");
    // console.log('shop.js', adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

    // const products = Product.fetchAll();
    
    // res.render('shop', {
    //     prods: products, 
    //     pageTitle: "Shop", 
    //     path: '/', 
    //     hasProducts: products.length > 0,
    //     activeShop: true,
    //     productCSS: true
    // });


    Product.fetchAll(products => {
        res.render('shop', {
            prods: products, 
            pageTitle: "Shop", 
            path: '/', 
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });
};