import * as flsFunction from "./modules/function.js";
import smoothscroll from 'smoothscroll-polyfill';

flsFunction.isWebp();
flsFunction.calcWidthScroll();
flsFunction.mask();
flsFunction.scrollLinks();
flsFunction.sendForm();

smoothscroll.polyfill();

let im = new Inputmask({
    mask: '+7 (999) 999-99-99',
    showMaskOnHover: false,
    showMaskOnFocus: false,
    jitMasking: true,
    inputmode: 'tel'
});

Fancybox.bind('[data-fancybox="gallery"]', {});

const whySection = document.querySelector('.why');
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
}
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.why__wrapper-left').classList.add('animate__fadeInLeft');
            document.querySelector('.why__wrapper-right').classList.add('animate__fadeInRight');
        }
    })
}, options)
observer.observe(whySection)
const maskedInputs = document.querySelectorAll('input[data-input="masked"]');
maskedInputs.forEach(inp => {
    im.mask(inp)
})

