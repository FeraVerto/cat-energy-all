// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files
import "jquery"
import "popper.js"


let mainNav = document.querySelector('.main-nav');
let menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener("click", ()=>mainNav.classList.toggle('visually-hidden--mobile'));


function createComparison(element) {
    element.addEventListener('mousemove', (evt) => {
    console.log(evt);

    let layer = element.querySelector('.example-image--cat:nth-child(2)');
    let width = evt.offsetX, height = parseInt(getComputedStyle(layer).height);
    layer.style.clip = `rect(0px, ${width + 70}px, ${height}px, 0px)`;

    let layer2 = element.querySelector('.example-image--cat:nth-child(1)');
    let width2 = evt.offsetX, height2 = parseInt(getComputedStyle(layer2).height);
    layer2.style.clip = `rect(0px, auto, ${height2}px, ${width2}px)`;

  }, false);
}

createComparison(document.querySelector('.example-image'));
