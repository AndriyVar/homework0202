'use strict';

let login = prompt('Введіть свій логін');

if (login === 'Admin') {
    let passvord = prompt('Введіть свій пароль')

    if (passvord === 'Господар') {
        alert('Ласкаво просимо')
    } else if (!passvord) {
        alert('Скасовано')
    } else {
        alert('Неправильний пароль')
    }

} else if (!login) {
    alert('Скасовано')
} else {
    alert('Я Вас не знаю')
}