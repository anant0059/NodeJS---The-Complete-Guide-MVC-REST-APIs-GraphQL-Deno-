// const products = [];

const fs = require('fs');
const path = require('path');

const rootDir = require('../util/path'); 
const p = path.join(rootDir, 
    'data', 
    'products.json'
);


const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if(err) {
            cb([])
        }
        else {
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        this.id = Math.random().toString();

        getProductsFromFile( products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) =>{
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        // const p = path.join(rootDir, 
        //     'data', 
        //     'products.json'
        // );
    
        // fs.readFile(p, (err, fileContent) => {
        //     if(err) {
        //         cb([])
        //     }
        //     cb(JSON.parse(fileContent));
        // });

        getProductsFromFile(cb);
    }

    static findById(id, cb) {
        getProductsFromFile(products => {
            const product = products.find(p => p.id === id);
            cb(product);
        });
    }
}