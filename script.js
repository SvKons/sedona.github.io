var formHide = document.querySelector(".map .form");
var btnHide = document.querySelector(".travel-city .search .btn");

btnHide.addEventListener('click', function(){
    if(formHide.classList.contains('hidden')){
        formHide.classList.remove("hidden");
    }
    else formHide.classList.add("hidden");
});

