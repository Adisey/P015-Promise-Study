function applayForViva(document, resolve, reject) {
    console.log('Запускаем получение визы....');
    let promiseVisa = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > .3 ? resolve({}) : reject('В визе отказано');
        }, 1000);
    });
    return promiseVisa;
}

function getVisa(visa) {
    console.info('Виза получена!');
    return Promise.resolve('UK');
}

function bookHotel(visa) {
    console.log(`Виза`, visa);
    console.log(`Бронируем Отель`);
    let h1 = hotel(1);
    let h2 = hotel(2);
    let h3 = hotel(3);
    return new Promise(function (resolve, reject) {
        Promise.race([h1, h2, h3])
            .then(value => {
                console.log(`First response hotel -`, value);
                resolve(`Зарезервировано Hotel ${value}`)
            })
            .catch(error => {
                console.error(`Not fout Hotel - `, error);
                reject(`Нет свободных отелей!`)
            });
    });
// return new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(`Зарезервировано`),1000);
// });
}

function buyTikets(boking) {
    console.log(`Бронь`, boking);
    console.log(`Покупаем билет`);
}

applayForViva({})
    .then(getVisa)
    .then(bookHotel)
    .then(buyTikets)
    .catch(error => console.error(error))
    .then(() => console.info(`Процедура завершена`));


function hotel(num) {
    return new Promise(function (resolve, reject) {
        let chekTime = 3000; //ms
        let tooLong = 200; // ms
        let delay = Math.ceil(Math.random() * chekTime);
        console.log(`Hotel - №`, num, delay);
        setTimeout(() => {
            if (delay > tooLong)
                reject(num);
            else
                resolve(num);
        }, delay);
    });
}





