function applayForViva(document, resolve, reject) {
    console.log('Запускаем получение визы....');
    let promiseVisa = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > .5 ? resolve({}) : reject('В визе отказано');
        }, 1000);
    });
    return promiseVisa;
}

function getVisa(visa) {
    console.info('Виза получена!');
    return Promise.resolve('UK');
}

function bookHotel(visa) {
    console.log(`Виза`,visa);
    console.log(`Бронируем Отель`);
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(`Зарезервировано`),1000);
    });
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





