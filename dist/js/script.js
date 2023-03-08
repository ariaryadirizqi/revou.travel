// Navigation
const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");
 
menuBar.addEventListener("click", () => {
  menuNav.classList.toggle("menu-active");
});

const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);
  menuNav.classList.remove("menu-active");
});

// Validation
const fullName = document.querySelector('.name')
const email = document.querySelector('.email')
const interest = document.querySelector('.interest')
const submit = document.querySelector('.submit-form')

submit.addEventListener('click', ()=> {
    if (fullName.value == '' || email.value == '' || interest.value == '') {
        alert('Isi yang benar!')
    } else if (fullName.value.length < 5) {
        alert('Masukkan nama kamu minimal 5 huruf!')
    } else if(email.value.indexOf('@gmail.com') == -1){
        alert('Masukkan format email yang benar!')
    } else {
        alert('Pesan kamu berhasil terkirim!')
    }
})

// Daftar
function redirWhatsapp() {
    window.location.href = "https://wa.me/+6285887333962";
  }

// Banner Slide
const button = document.querySelector('button');
const hero = document.querySelector('.hero')
const interval = 3000

let heroSlide = document.querySelectorAll('.hero-slide')
let index = 1

const firstClone = heroSlide[0].cloneNode(true)
const lastClone = heroSlide[heroSlide.length - 1].cloneNode(true)

firstClone.id = 'first-clone'
lastClone.id = 'last-clone'

hero.append(firstClone)
hero.prepend(lastClone)

const slideWidth = heroSlide[index].clientWidth

hero.style.transform = `translateX(${-slideWidth * index}px)`

const startSlide = () => {
    setInterval(() => {
        heroSlide = document.querySelectorAll('.hero-slide')
        if(index >= heroSlide.length - 1) return;
        
        index++
        hero.style.transform = `translateX(${-slideWidth * index}px)`
        hero.style.transition = '2s ease-in-out'
    }, interval);
}

startSlide()

hero.addEventListener('transitionend', () => {
    heroSlide = document.querySelectorAll('.hero-slide')

    if (heroSlide[index].id == 'first-clone') {
        hero.style.transition = 'none'
        index = 1
        hero.style.transform = `translateX(${-slideWidth * index}px)`
    }
})

button.addEventListener('click', function () {
    if (window.innerWidth < 600) {
        window.scrollBy(0, 1193);
    } else {
        window.scrollBy(0, 600);
    }
})

