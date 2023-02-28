console.log("check");
let header = document.querySelector('header');
let main = document.querySelector('main');
let footer = document.querySelector('footer');
let aftersearchbar = document.querySelector('.aftersearchbar');
let searchbar = document.querySelector('.search--bar');
let cross= document.querySelector('.cross');
let aftersearchbarDropdown = document.querySelector('.aftersearchbar--dropdownmenu');
let trainingHover = document.querySelector('.training--hover');
let trainingHoverContainer = document.querySelector('.training--hover--container');
let trainings = document.querySelector('.training');

searchbar.addEventListener('click', function() {
    header.style.background= 'rgba(0, 0, 0, 0.7)';
    main.style.background= 'rgba(0, 0, 0, 0.7)';
    footer.style.background= 'rgba(0, 0, 0, 0.7)';
    aftersearchbar.style.display = 'block';

})

cross.addEventListener('click', function() {
    header.style.background= '#ECF3FF';
    main.style.background= 'rgba(0, 0, 0, 0.0)';
    footer.style.background='#061C41';
    aftersearchbar.style.display = 'none';
})

aftersearchbar.addEventListener('click', function() {
    // console.log('aftersearchbar');
    aftersearchbarDropdown.style.display = 'block';
})
trainings.addEventListener("mouseover", function() {
    trainingHover.style.display = 'block';
    // console.log('trainings');

    // aftersearchbarDropdown.style.display = 'block';s
})
trainingHover.addEventListener("mouseout", function() {
    trainingHover.style.display = 'none';
    // console.log('trainings');

    // aftersearchbarDropdown.style.display = 'block';s
})