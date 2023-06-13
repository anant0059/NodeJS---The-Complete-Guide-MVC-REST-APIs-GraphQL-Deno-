const products = [];

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
    products.push({title: req.body.title});
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    // console.log("In another middleware");
    // console.log('shop.js', adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

    res.render('shop', {
        prods: products, 
        pageTitle: "Shop", 
        path: '/', 
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
}