//Javacript til menu scroll, gemmer menuen når der scrolles ned
//viser den når der scrolles op

//kilde til dem der er interesseret: https://www.youtube.com/watch?v=JEBgqbZWYIQ

var lastScrollTop = 0;
var header = document.getElementById("header");

window.addEventListener("scroll", function(){

    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if(scrollTop > lastScrollTop){
        header.style.top ="-70px";
    }else{
        header.style.top = "0";
    }

    lastScrollTop = scrollTop;
})

