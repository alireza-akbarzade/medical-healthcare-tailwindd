const mobileNav =document.querySelector('.mnav');
const closeBtn =document.querySelector('.mnav__close-btn');
const closeBtnIcn =document.querySelector('.mnav__close-btn-icon');

const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';

closeBtn.addEventListener('click',()=>{
if(mobileNav.classList.contains(navClosedClass)){
    mobileNav.classList.toggle(navOpenedClass);

    closeBtnIcn.classList.toggle(arrowLeftClass);
    closeBtnIcn.classList.toggle(arrowRightClass);
    
}
});


// script faq

const fagItems = document.querySelectorA1l('.faq__item');
fagItems.forEach((item) => {

const faqBtn = item.querySelector('.faq__btn');
item.addEventListener('click',() => {
const isOpen = item.ClassList.toggle('open');
const iconClass = isOpen ? 'ri-subtract-line' : 'ri-add-line';
const iconElement = fagBtn.querySelector('i');
iconElement.classList = '${iconClass} text-2xl';
});

});






