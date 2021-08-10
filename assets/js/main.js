// Check wrong input gmail
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const emailInput = document.querySelector('.footer__input');
const wrongEmailMess = document.querySelector('.wrongEmail');
const submitEmailBtn = document.querySelector('.submit--btn');

submitEmailBtn.addEventListener('click', function(e) {
    if (emailInput.value === '') {
        e.preventDefault();
        return;
    }
    if (!validateEmail(emailInput.value)) {
        e.preventDefault();
        wrongEmailMess.style.display = 'block';
        setTimeout(function deleteWrongEmailMess() {
            wrongEmailMess.style.display = 'none';
        }, 2000);
    }
}, false)

// Mobile nav open/close 
const mobileNav = document.querySelector('.header-mobile-nav__wrap'); 
const openMobileNavBtn = document.querySelector('.header-mobile-nav__btn');
const closeMobileNavBtn = document.querySelector('.header-mobile-nav__esc__btn');

const openMobileNav =  function openMobileNav() {
    mobileNav.style.display = 'flex';
    openMobileNavBtn.style.display = 'none';
    closeMobileNavBtn.style.display = 'block';
};
openMobileNavBtn.ontouchstart = openMobileNav;

const closeMobileNav = function closeMobileNav() {
    mobileNav.style.display = 'none';
    closeMobileNavBtn.style.display = 'none';
    openMobileNavBtn.style.display = 'block';
};
closeMobileNavBtn.ontouchstart = closeMobileNav;

// People scroll
const people = document.querySelector('.people__wrap')

people.ontouchmove = setInterval(function() {
    swipeOrScrollToChangeScrollSelectBtn();
}, 0);

people.onwheel = function peopleScroll(e) {
    e.preventDefault();
    people.scrollLeft += e.deltaY;
    swipeOrScrollToChangeScrollSelectBtn();
};

function swipeOrScrollToChangeScrollSelectBtn() {
    let len = people.scrollLeft;
    const sreenWidth = window.innerWidth;
    const lenToSwitch = window.innerWidth/2-1; 

    if (len>=0 && len<sreenWidth-lenToSwitch) {
        changeScrollSelectBtn(0);
    }
    else if (len>=sreenWidth-lenToSwitch && len<(sreenWidth-lenToSwitch)*2) {
        changeScrollSelectBtn(1);
    }
    else if (len>=(sreenWidth-lenToSwitch)*2 && len<(sreenWidth-lenToSwitch)*3) {
        changeScrollSelectBtn(2);
    }
    else {
        changeScrollSelectBtn(3);
    }
};

const scrollBtn = document.querySelectorAll('.scroll__btn button');
const scrollBtn1 = document.querySelector('.scroll__btn button:nth-child(1)');
const scrollBtn2 = document.querySelector('.scroll__btn button:nth-child(2)');
const scrollBtn3 = document.querySelector('.scroll__btn button:nth-child(3)');
const scrollBtn4 = document.querySelector('.scroll__btn button:nth-child(4)');

function changeScrollSelectBtn(n) {
    for (let value of scrollBtn) {
        value.classList.remove('scroll__btn--select');
    }
    scrollBtn[n].classList.add('scroll__btn--select');
};

scrollBtn1.onclick = function() {
    people.scrollLeft = 0;
    changeScrollSelectBtn(0);
};

scrollBtn2.onclick = function() {
    people.scrollLeft = 0;
    people.scrollLeft += window.innerWidth;
    changeScrollSelectBtn(1);
};

scrollBtn3.onclick = function() {
    people.scrollLeft = 0;
    people.scrollLeft += window.innerWidth * 2;
    changeScrollSelectBtn(2);
};

scrollBtn4.onclick = function() {
    people.scrollLeft = 0;
    people.scrollLeft += window.innerWidth * 3;
    changeScrollSelectBtn(3);
};



