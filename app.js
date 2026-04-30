document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.a').forEach(function (link) {
    link.setAttribute('target', '_blank');
  });
});

const btnMenu = document.getElementById('btnMenu');
const header = document.getElementById('header');
const titrePage = document.getElementById('titrePage');

function openMenu() {
  header.style.visibility = 'visible';
  btnMenu.style.visibility = 'hidden';
}

function closeMenu() {
  header.style.visibility = 'hidden';
  btnMenu.style.visibility = 'visible';
}


btnMenu.addEventListener('click', openMenu);
titrePage.addEventListener('click', closeMenu);

