// query selector que tiene como clase menu_btn
document.querySelector('.menu_btn').addEventListener('click', () => {
    // se selecciona el elemento nav_menu y añada una clase, con toggle se quita si ya esta puesta y se pone si no
    document.querySelector('.nav_menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase')
ScrollReveal().reveal('.news_cards', {delay: 500})
ScrollReveal().reveal('.cards_banner_1', {delay: 500})
ScrollReveal().reveal('.cards_banner_2', {delay: 500})
