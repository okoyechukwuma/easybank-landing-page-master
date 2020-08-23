const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const nav = document.querySelector('.nav-list');



$(document).ready(function(){
    $(".hamburger").click(function(){
        $(".close").addClass('close-display');
        $(this).addClass('hamburger-remove');
        $(".nav-list").addClass("nav-display");
    });
  });

close.addEventListener('click', () => {
    close.classList.remove('close-display');
    hamburger.classList.remove('hamburger-remove');
    nav.classList.remove('nav-display');
});

