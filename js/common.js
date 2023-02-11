const header = document.getElementById('header');
window.addEventListener('scroll', ()=> {
    header.style.background = "#fff";
    if(window.scrollY == 0 ) header.style.background = "none"; 
})
