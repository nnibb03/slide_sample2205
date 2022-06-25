'use strict';

{
  const ham = document.getElementById('js-hamburger');
  const nav = document.getElementById('header-nav');
  const menu = document.getElementById('nav-menu');

  ham.addEventListener('click', () => {
    ham.classList.toggle('active');
    nav.classList.toggle('active');
    menu.classList.toggle('active');
  });
}
