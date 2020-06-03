"use strict";

// $(function() {
// нажатие на кнопку
// смена внешнего вида контроллера
// отдача даты
const datesArr = document.querySelectorAll('.js-date-key');
datesArr.forEach((date) => date.addEventListener('click', () => {
    console.log(outputDate(date.dataset.key));
}));

// получение даты
// поиск по ключу в объекте
// вывод новой информации
// const dateOutput = document.querySelectorAll('.js-date');
const datesJSON = {
    2020: {
        title: 'заголовок первой даты',
        output: '2020',
        descr: 'короткое описание первой даты которое повторяется два раза а потом заканчивается как и всё в этом мире. короткое описание первой даты которое повторяется два раза а потом заканчивается как и всё в этом мире.'
    },
    2017: {
        title: 'заголовок второй даты',
        output: '2017',
        descr: 'короткое описание второй даты которое повторяется два потом заканчивается в этом мире первой два раза а потом заканчивается как и всё в этом мире.'
    },
    2015: {
        title: 'заголовок даты даты даты',
        output: '2015',
        descr: 'короткое описание второй ом мире первой два раза а как и всё в этом мире.'
    },
};

const dateTitle = document.querySelector('.js-date-title');
const dateOutput = document.querySelector('.js-date-output');
const dateDescr = document.querySelector('.js-date-descr');

function outputDate(date) {
    console.log(datesJSON[date]);
    dateTitle.textContent = datesJSON[date].title;
    dateOutput.textContent = datesJSON[date].output;
    dateDescr.textContent = datesJSON[date].descr;
}
// });
