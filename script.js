'use strict'


const btnClick = document.querySelector('.btn__container'),
      modalWindow = document.querySelector('.modal'),
      modalClose = document.querySelector('.modal__close');


btnClick.addEventListener('click', () => {
    modalWindow.classList.add('show');
    modalWindow.classList.remove('hide');
});

function closeModalWindow () {
    modalWindow.classList.add('hide');
    modalWindow.classList.remove('show');
}

modalClose.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
        closeModalWindow();
    }
});

modalWindow.addEventListener('click', (e) => {
    if (e.target === modalWindow) {
        closeModalWindow();
    }
});