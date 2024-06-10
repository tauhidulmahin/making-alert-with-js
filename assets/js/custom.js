
document.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.style.position = 'sticky';
        navbar.style.zIndex = '10000';
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('bg-success-800');
    } else {
        navbar.style.position = 'relative';
        navbar.classList.add('bg-success-800');
        navbar.classList.remove('bg-transparent');
    }
});
$('#modal-validation').on('shown.bs.modal', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.style.zIndex = '1';
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('bg-success-800');
    } else {
        navbar.style.zIndex = '0';
        navbar.style.position = 'relative';
        navbar.classList.add('bg-success-800');
        navbar.classList.remove('bg-transparent');
    }
});
$('#modal-validation').on('hidden.bs.modal', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.style.position = 'sticky';
        navbar.style.zIndex = '10000';
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('bg-success-800');
    } else {
        navbar.style.position = 'relative';
        navbar.style.zIndex = '10000';
        navbar.classList.add('bg-success-800');
        navbar.classList.remove('bg-transparent');
    }
});



//back to top button
const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}

const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
}

let backtotop = select('.back-to-top')
if (backtotop) {
    const toggleBacktotop = () => {
        if (window.scrollY > 100) {
            backtotop.classList.add('active')
        } else {
            backtotop.classList.remove('active')
        }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
}
