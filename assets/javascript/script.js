// Hamburger menu

document.querySelector('.hamburger').addEventListener('click', function () {
  document.querySelector('nav').style.visibility="visible";
  document.querySelector('.hamburger').style.display="none";
  document.querySelector('.cross').style.display="inline";
});

document.querySelector('.cross').addEventListener('click', function () {
  document.querySelector('nav').style.visibility="hidden";
  document.querySelector('.hamburger').style.display="inline";
  document.querySelector('.cross').style.display="none";
});
