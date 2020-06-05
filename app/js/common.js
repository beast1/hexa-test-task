"use strict";

// $(function() {
// нажатие на кнопку
// смена внешнего вида контроллера
// отдача даты
// const datesArr = document.querySelectorAll('.js-date-key');
// datesArr.forEach((date) => date.addEventListener('click', () => {
//     console.log(outputDate(date.dataset.key));
// }));
$(document).ready(function () {
    console.log('jquery script start working');

    const sidebar = document.querySelector('.js-sidebar');
    const openSidebarBtnArr = document.querySelectorAll('.js-open-sidebar');
    const closeSidebarBtnArr = document.querySelectorAll('.js-close-sidebar');

    openSidebarBtnArr.forEach((openSidebarBtn) => {
        openSidebarBtn.addEventListener('click', () => {
            sidebar.classList.add('js-open');
        });
    });

    closeSidebarBtnArr.forEach((closeSidebarBtn) => {
        closeSidebarBtn.addEventListener('click', () => {
            sidebar.classList.remove('js-open');
        });
    });

    document.onkeydown = function(e) {
        if (e.keyCode === 27) {
            sidebar.classList.remove('js-open');
        }
    };

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

    $('.js-date-key').each(function (dateIndex, date) {
        console.log(datesJSON[date.dataset.key]);
        console.log(date);
        date.addEventListener('click', function () {
            console.log('click on date is work');
            outputDate(datesJSON[date.dataset.key]);
        });
    });

    function outputDate(dateObj) {
        // // запустить после конца транзишина лоадера
        if (dateObj !== undefined) {
            $('.js-date-loader').animate({
                opacity: 1
            }, 1000, function() {
                $('.js-date').fadeOut(function() {
                    $('.js-date-title').text(dateObj.title);
                    $('.js-date-output').text(dateObj.output);
                    $('.js-date-descr').text(dateObj.descr);
                }).fadeIn();
            });
        } else {
            console.log('date is undefined');
        }
    }
});


// получение даты
// поиск по ключу в объекте
// вывод новой информации


