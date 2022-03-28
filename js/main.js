
const modalwindow = document.querySelector('.modal');
const buttonModals = document.querySelectorAll('.model__button');
const modalClose = document.querySelector('.modal__close');
const body = document.querySelector('body');

buttonModals.forEach((item) => {
    item.addEventListener('click', () => {
        modalwindow.style.display ='flex';
        body.classList.add('noscroll');
    });
});

modalwindow.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__inner');

    if(!isModal) {
        modalwindow.style.display = 'none';
        body.classList.remove('noscroll');
    }
});

modalClose.addEventListener('click', () => {
    modalwindow.style.display = 'none';
    body.classList.remove('noscroll');
})