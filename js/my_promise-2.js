function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}


delay(1000)
    .then(() => console.log("Hello!"));

let filesJSON = [
    'user.json'
    // ,'guest.json'
];

// начало цепочки
let chain = Promise.resolve();

let results = [];

// в цикле добавляем задачи в цепочку
filesJSON.forEach(function(url) {
    chain = chain
        .then(() => httpGet(url))
        .then((result) => {
            results.push(result);
        });
});

// в конце — выводим результаты
chain.then(() => {
    console.log(results);
});