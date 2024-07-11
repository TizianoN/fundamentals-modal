const modalOpenButton = document.querySelector('.btn-open-modal');
const modalCloseButton = document.querySelector('.btn-close-modal');
const layoverElement = document.querySelector('.layover');

modalOpenButton.addEventListener('click', function () {
  layoverElement.classList.remove('modal-closed');
});

modalCloseButton.addEventListener('click', function () {
  layoverElement.classList.add('modal-closed');
});
