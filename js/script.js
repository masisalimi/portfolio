const year = new Date().getFullYear();
document.getElementById("year").textContent = year;


const btnToggle = document.getElementById("theme-toggle");  
const body = document.body;

btnToggle.addEventListener('click', ()=>{
    body.classList.toggle('dark-mode')
 
})

const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
 