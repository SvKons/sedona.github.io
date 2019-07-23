var formHide = document.querySelector(".map .form");
var btnHide = document.querySelector(".travel-city .search .btn");

btnHide.addEventListener('click', function(){
    if(formHide.classList.contains('hidden')){
        formHide.classList.remove("hidden");
    }
    else formHide.classList.add("hidden");
});

var menuHide = document.querySelector(".nav-list");
var menuBtn = document .querySelector(".big-logo .menu");
var logo = document.querySelector(".min-logo")

menuBtn.addEventListener('click', function(){
    if(menuHide.classList.contains('hidden')){
        menuHide.classList.remove("hidden");
        menuBtn.style.top = 240 +'px';
        logo.style.top = 223 + 'px';
    }
    else{
        menuHide.classList.add("hidden");
        menuBtn.style.top = 18 + 'px';
        logo.style.top = -56 + 'px';
    }
});