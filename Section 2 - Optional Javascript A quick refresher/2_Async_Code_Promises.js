const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
};


setTimeout(() => {
    console.log('Timer is done!');
    // fetchData(text => {
    //     console.log(text);
    // });
    fetchData().then(text => {
        console.log(text);
        fetchData().then(text2 => {
            console.log(text2);
        });
    });
    //or
    fetchData()
        .then(text => {
            console.log(text);
            return fetchData();
        })
        .then(text2 => {
            console.log(text2);
        });
}, 2000);  // this means run after 1000ms;

console.log('Hello!');
console.log('Hi!');