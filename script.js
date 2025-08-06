const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
});

menu.addEventListener('mouseleave', () => {
  menu.classList.remove('show');
});

document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
    menu.classList.remove('show');
  }
});
