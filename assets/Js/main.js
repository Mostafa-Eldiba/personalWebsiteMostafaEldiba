// Toggle Icon Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
console.log("hello");
}


// Scroll Sections
let Sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    Sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            
            // Active Navbar Links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active')
            });
        }
    });
    // Sticky Header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


    // Remove Toggle Icon And Navbar When Click Navbar Links (scroll)
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
    
}


// Title Multi Type Text
const textElement = document.getElementById('multiple-typed-text');
const texts = ['Front-end Developer', 'Tax Accountant' , "Data Entry." , "CV Maker."];
let index = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;

function type() {
    currentText = texts[index];

    if (isDeleting) {
        charIndex--;
        textElement.textContent = currentText.substring(0, charIndex);
    } else {
        charIndex++;
        textElement.textContent = currentText.substring(0, charIndex);
    }

    // Set text color to red while typing and deleting
    textElement.style.color = '#ff014f';

    if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => isDeleting = true, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

document.addEventListener('DOMContentLoaded', type);






// document.addEventListener('DOMContentLoaded', () => {
//     const sections = document.querySelectorAll('.section');

//     const lazyLoad = (section) => {
//         const src = section.getAttribute('data-src');
//         if (src) {
//             fetch(src)
//                 .then(response => response.text())
//                 .then(data => {
//                     section.innerHTML = data;
//                     section.classList.remove('hidden');
//                 })
//                 .catch(err => console.error('Error loading section:', err));
//         } else {
//             section.classList.remove('hidden');
//         }
//     };

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 lazyLoad(entry.target);
//                 observer.unobserve(entry.target);
//             }
//         });
//     });

//     sections.forEach(section => {
//         section.classList.add('hidden');
//         observer.observe(section);
//     });
// });


AOS.init();


// let section = document.querySelector(".skills");
// let pars = document.querySelector(".progress pars");


// window.onscroll = function () {

//     if (window.scrollY >=  section.offsetTop) {
//         pars.forEach((span) => {
//             span.style.width = span.dataset.width;
//         })
//     }
// }











// الحصول على جميع الأزرار التي تفتح المودال
var btns = document.querySelectorAll(".projectTrigger");

// الحصول على جميع عناصر المودال
var modals = document.querySelectorAll(".modal");

// الحصول على جميع أزرار الإغلاق
var spans = document.querySelectorAll(".close");

// إضافة حدث النقر لكل زر لفتح المودال الخاص به
btns.forEach(function(btn) {
    btn.onclick = function(event) {
        event.preventDefault(); // منع السلوك الافتراضي للرابط
        var modalId = btn.getAttribute("data-target");
        var modal = document.querySelector(modalId);
        modal.style.display = "block";
    }
});

// إضافة حدث النقر لكل زر إغلاق لإغلاق المودال الخاص به
spans.forEach(function(span) {
    span.onclick = function() {
        var modal = span.closest(".modal");
        modal.style.display = "none";
    }
});

// إضافة حدث النقر خارج المودال لإغلاقه
window.onclick = function(event) {
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}


