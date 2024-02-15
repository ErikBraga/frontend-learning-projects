const form = document.querySelector('form');
const container_1 = document.querySelector('.container');
const container_2 = document.querySelector('.container-2');

form.addEventListener('submit', (el) => {
    el.preventDefault;
    container_1.classList.add('hidden');
    container_2.classList.remove('hidden');
});