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
    constructor(id, title, imageUrl, description, price) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {

        getProductsFromFile( products => {
            if(this.id) {
                const existingProductIndex = products.findIndex(prod => prod.id === this.id);
                const updatedProducts = [...products];
                updatedProducts[existingProductIndex] = this;
                // console.log(this);
                fs.writeFile(p, JSON.stringify(updatedProducts), (err) =>{
                    console.log(err);
                    // console.log("hi");
                });
            }
            else {
                this.id = Math.random().toString();
                products.push(this);
                fs.writeFile(p, JSON.stringify(products), (err) =>{
                    console.log(err);
                });
            }
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