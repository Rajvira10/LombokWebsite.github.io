document.querySelector('.hamburger').addEventListener('click', function(e) {
    const nav = document.querySelector("nav");
    const header=document.querySelector("header");
    const hero=document.querySelector(".hero");
    const ul=document.querySelector("ul");
    const bla=document.querySelector(".bla");
    const body=document.querySelector("body")
    nav.classList.toggle("active");
    hero.classList.toggle("inactive");
    ul.classList.toggle("active2");
    bla.classList.toggle("black");
    body.classList.toggle("fixed");
});