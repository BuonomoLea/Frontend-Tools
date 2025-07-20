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


document
  .getElementById('contactForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    const formDataObject = {
      name: name,
      comment: comment,
    };

    fetch('/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataObject),
    })
      .then((response) => response.text())
      .then((data) => {
        alert(data, 'Formulaire envoyé avec succès !');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
