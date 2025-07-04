const navMenu = document.querySelector('#navMenu');
const navMenuBtn = document.querySelector('#navMenuBtn');

navMenuBtn.addEventListener('click', () => {
  navMenu.classList.add('show');
});
