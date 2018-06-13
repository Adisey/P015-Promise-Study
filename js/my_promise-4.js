function go(num) {
    return new Promise(function (resolve, reject) {
        let delay = Math.ceil(Math.random() * 3000);
        console.log(num, delay);
        setTimeout(() => {
            if (delay > 2000)
                reject(num);
            else
                resolve(num);
        }, delay);
    });

}

let p1 = go(1);
let p2 = go(2);
let p3 = go(3);

Promise.all([p1, p2, p3])
    .then(value => console.log(`Promise -`, value))
    .catch(error => console.error('Error P - ', error));
console.log(`---`);
let p6 = go(6);
let p7 = go(7);
let p8 = go(8);

Promise.race([p6, p7, p8])
    .then(value => console.log(`First -`, value))
    .catch(error => console.error(' E - ', error));