// script.js

let heroTextElement = document.querySelector('.hero-text');

function updateHeroText() {
    let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (windowWidth >= 768) {
        heroTextElement.innerText = "Transform your physique and embrace a healthier lifestyle with \n our comprehensive fitness and nutrition support.";
    } else {
        heroTextElement.innerText = "Transform your physique and embrace a healthier \n lifestyle with our comprehensive fitness and nutrition \n support.";
    }
}

updateHeroText();

window.addEventListener('resize', function () {
    updateHeroText();
});