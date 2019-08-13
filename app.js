let openModal = document.querySelector('.btn');
let modalCont = document.querySelector('.modal-container');


openModal.addEventListener('click', modalOpen);
window.addEventListener('click', modalClose);

function modalOpen() {
    modalCont.style.display = 'block';
    openModal.style.display = 'none';
}

function modalClose(e) {
    if(e.target === modalCont) {
        modalCont.style.display = 'none';
        openModal.style.display = 'block';
    }
}
