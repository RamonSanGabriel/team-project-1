const accordion = document.querySelectorAll('.accordion .container');

accordion.forEach((accordion) => {
  accordion.addEventListener('click', () => {
    accordion.classList.toggle('active');
  });
});
