let buttonWraper1 = document.querySelector('#button_wraper1');
let buttonWraper2 = document.querySelector('#button_wraper2');
let buttonWraper3 = document.querySelector('#button_wraper3');
let button1 = document.querySelector('#button1');
let button3 = document.querySelector('#button3');
let window1 = document.querySelector('#window1');
let window3 = document.querySelector('#window3');
let img1 = document.querySelector('#img1');
let img2 = document.querySelector('#img2');
let UpArrow = document.querySelector('#up_arrow_wraper');
let rootElement = document.documentElement;
let menuOptionsArray = ['Strona główna', 'Gabinety', 'Dla pacjenta', 'Pracownicy', 'Cennik', 'Kontakt'];
let menuOptions = document.querySelectorAll('.navbar_menu_option');
let menuOptionsP = document.querySelectorAll('.navbar_menu_option_p');
let buttons = document.querySelector('#buttons');
let okButtons = document.querySelectorAll('.ok_button');
let prevScrollpos = window.pageYOffset;
let content_fields = document.querySelectorAll('.content');
let windowWidth = window.innerWidth;
let isDropDown = false;
let mobileMenu = document.createElement('div');
// let menu_option0 = document.querySelector('#menu_option0');

function expandCollapse() {
    if (isDropDown) {
        mobileMenu.style.transform = 'translateY(-27rem)';
        for (let i = 0; i < content_fields.length; i++) {
            content_fields[i].style.filter = 'brightness(100%)';
            content_fields[3].style.filter = 'brightness(20%)';
            document.querySelector('#content_bg').style.filter = 'brightness(100%)';
            console.log('drk', content_fields[i].style.filter);
        }
    } else {

        for (let i = 0; i < content_fields.length; i++) {
            content_fields[i].style.filter = 'brightness(20%)';
            content_fields[3].style.filter = 'brightness(20%)';
            console.log('drk', content_fields[i].style.filter);
        }
        document.querySelector('#content_bg').style.filter = 'brightness(20%)';
        if (windowWidth <= 500) {
            mobileMenu.style.transform = 'translateY(5.6rem)';
        } else if (windowWidth <= 652) {
            mobileMenu.style.transform = 'translateY(6rem)';
        }
    }

    isDropDown = !isDropDown;

}
document.querySelector('#ham_menu').addEventListener('click', expandCollapse);
mobileMenu.addEventListener('click', expandCollapse);
// window.addEventListener('load', function () {
//     console.log('600');
function showMobileMenu() {
    windowWidth = window.innerWidth;
    console.log(windowWidth);
    if (windowWidth <= 652) {
        console.log('show');
        mobileMenu.setAttribute('id', 'mobile_menu');
        document.querySelector('body').insertBefore(mobileMenu, document.querySelector('#header_nav'));
        mobileMenu.appendChild(document.querySelector('#navbar_menu'));
        console.log('#navbar_menu');
    }
}
function hideMobileMenu() {
    windowWidth = window.innerWidth;
    if (windowWidth >= 652) {
        console.log('hide', windowWidth);
        document.querySelector('#navbar').appendChild(document.querySelector('#navbar_menu'));
    }
}
function showHideMobileMenu() {
    console.log(window.innerWidth);
    showMobileMenu();
    hideMobileMenu();
}
// window.addEventListener('resize ', expandCollapse);
window.onresize = showHideMobileMenu;
// window.onresize = hideMobileMenu;
showMobileMenu();
// });

fillMenu();
document.querySelector('#menu_option5').style.filter = 'brightness(20%)';
document.querySelector('#content_bg').style.filter = 'brightness(100%)';
// window.addEventListener('click', function(){
//     if(event.target!==mobileMenu)
// })
window.addEventListener('scroll', hideShowUpArrow);
window.addEventListener('load', function () {
    buttonWraper1.classList.add('animate__bounceInLeft');
    buttonWraper1.style.visibility = 'visible';
    buttonWraper2.classList.add('animate__bounceInRight');
    buttonWraper2.style.visibility = 'visible';
    buttonWraper3.classList.add('animate__bounceInLeft');
    buttonWraper3.style.visibility = 'visible';
});
document.querySelector('#ok_button1').addEventListener('click', closeWindow);
document.querySelector('#ok_button2').addEventListener('click', closeWindow);
document.querySelector('#navbar_menu').addEventListener('click', scrollToElement);
UpArrow.addEventListener('click', scrollToTop);
buttonWraper1.addEventListener('click', promptOpen);
buttonWraper3.addEventListener('click', promptOpen);
window.addEventListener('click', closeWindow2);
function closeWindow2() {
    if (event.target !== buttonWraper1 & event.target !== buttonWraper2 & event.target !== buttonWraper3 & event.target !== button1 & event.target !== button2 & event.target !== button3 & event.target !== img1 & event.target !== img2 & event.target !== img3 & event.target !== document.querySelector('#prompt1') & event.target !== document.querySelector('#prompt3') & windowWidth >= 652) {
        closeWindow();
        console.log('closewin', windowWidth);
    }
}

function promptOpen() {

    let target = event.target;
    for (let i = 0; i < content_fields.length; i++) {
        content_fields[i].style.filter = 'brightness(20%)';
        document.querySelector('#content_bg').style.filter = 'brightness(20%)';
        // content_fields[i].style.filter = 'blur(5px)';

    }
    if (target === buttonWraper1 || target === button1 || target === img1) {
        window1.classList.add('animate__flipInX');
        window1.classList.remove('animate__flipOutX');
        window1.style.visibility = 'visible';

    } else if ((target === buttonWraper3 || target === button3 || target === img3)) {
        window3.classList.add('animate__flipInX');
        window3.classList.remove('animate__flipOutX');
        window3.style.visibility = 'visible';
    }

}
function closeWindow() {

    for (let i = 0; i < content_fields.length; i++) {
        content_fields[i].style.filter = 'brightness(100%)';
        document.querySelector('#menu_option5').style.filter = 'brightness(20%)';
        document.querySelector('#content_bg').style.filter = 'brightness(100%)';

        // content_fields[i].style.filter = 'blur(0)';
    }
    window1.classList.add('animate__flipOutX');
    window1.classList.remove('animate__flipInX');

    window3.classList.add('animate__flipOutX');
    window3.classList.remove('animate__flipInX');
}

function hideShowUpArrow() {
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 460) {
        document.querySelector('#nurse').classList.add('animate__bounceInLeft');
        document.querySelector('#nurse').style.visibility = 'visible';
    }
    if (currentScrollPos > 1400) {
        document.querySelector('#lab').classList.add('animate__bounceInRight');
        document.querySelector('#lab').style.visibility = 'visible';
    }
    if (prevScrollpos > currentScrollPos & prevScrollpos < 10) {
        UpArrow.style.bottom = '-5rem';
    } else {
        if (window.screen.width >= 600) {
            UpArrow.style.bottom = '3rem';
        } else {
            UpArrow.style.bottom = '2rem';
        }
    }
    prevScrollpos = currentScrollPos;

}

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

function fillMenu() {

    for (let i = 0; i < menuOptionsArray.length; i++) {
        menuOptionsP[i].textContent = menuOptionsArray[i];
        menuOptions[i].setAttribute = ('id', 'id' + i + 'para');
        menuOptionsP[i].setAttribute('id', 'id' + i);
    }
}

function scrollToElement() {
    let scrollTargetNumber = (event.target.id.length > 0 ? event.target.id : event.target.children[0].id).slice(2);
    let scrollTarget = '#menu_option' + scrollTargetNumber;
    document.querySelector(scrollTarget).scrollIntoView({ behavior: "smooth" });
}

window.addEventListener('click', () => console.log(event.target));