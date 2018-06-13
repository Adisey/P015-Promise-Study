function applayForViva(document, resolve, reject) {
    console.log('Запускаем получение визы....');
    let promiseVisa = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > .3 ? resolve({}) : reject('В визе отказано');
        }, 1000);
    });
    return promiseVisa;
}

function bookHotel() {
}

function buyTikets() {
}

applayForViva({})
    .then(
        function (visa) {
            console.info('Виза получена!');
        },
        function (reason) {
            console.error(reason);

        });

