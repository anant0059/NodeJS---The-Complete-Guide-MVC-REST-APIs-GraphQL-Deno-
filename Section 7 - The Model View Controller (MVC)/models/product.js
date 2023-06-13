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
    constructor(t) {
        this.title = t;
    }

    save() {
        // products.push(this);

        // const p = path.join(rootDir, 
        //     'data', 
        //     'products.json'
        // );

        // fs.readFile(p, (err, fileContent) => {
        //     let products = [];
        //     if(!err) {
        //         products = JSON.parse(fileContent)
        //     }
        //     products.push(this);
        //     fs.writeFile(p, JSON.stringify(products), (err) =>{
        //         console.log(err);
        //     });
        // });

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
}