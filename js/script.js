


/*function goTo(section, elementNumber) {
    "use strict";
    var scroll = document.getElementById(section).offsetTop - 64;
    window.scrollTo(0, scroll);
    var menuElements = document.getElementById("menu2").firstElementChild.children;
    for (var i = 0; i < menuElements.length; i = i + 1) {
        menuElements[i].className = "";
    }
    menuElements[elementNumber - 1].className = "active";
}

function changeOpacity() {
    "use strict";
    var opacity = 0;
    var i;
    var scroll = window.scrollY;
    var max_scroll = window.innerHeight - 60;
    if (scroll <= max_scroll) {
        opacity = scroll / max_scroll;
        var menu = document.getElementById("menu2");
        menu.style.backgroundColor = "rgba(151, 221, 228, " + opacity + ")";
    }
}


window.onscroll = function () {
    "use strict";
    changeOpacity();
};

*/

/*
function moverMapa() {
    var mapa = document.getElementsByClassName("mapa")[0] ;

    mapa.style.left = "-20%";

} 


function mapa() {
    "use strict";
    var scroll = window.scrollY;
    //Si el scroll ha llegado a media pantalla
    if (scroll >= window.innerHeight / 2) {
        //Ponemos el menú en su posición
        document.getElementById("mapa").style.left = "0";
    } else {
        //Ocultamos el menú
        document.getElementById("mapa").style.left = "30%";
    }
}

window.onscroll = function () {
    "use strict";
    mapa();
};

*/
/*
function isElementVisible(elementToBeChecked) {
    var TopView = window.scrollTop();
    var BotView = TopView + window.height();
    var TopElement = elementToBeChecked.offset().top;
    var BotElement = TopElement + elementToBeChecked.height();
    return ((BotElement <= BotView) && (TopElement >= TopView));
}

window.onscroll = function () {
    var quien = isElementVisible("#quien");
    var donde = isElementVisible("#donde");
    var expo = isElementVisible("#expo");

    if (quien) {
        document.getElementById("#menu").style.backgroundColor = "#CC5252";
    }
   
    
    if (donde) $("#menu").css("background", "rgba(196, 196, 196, 0.2);");
    if (expo) $("#menu").css("background", "#CC5252");

};


<nav id="menu">
            <a class="active" href=index.html>DOROTHEA<strong>LANGE</strong></a>
            <nav id="menu2">
                <ul>
                    <li onclick="goTo('quien', 1)">¿QUIÉN?</a></li>
                    <li onclick="goTo('donde', 2)">¿DÓNDE?</li>
                    <li onclick="goTo('expo', 3)">EXPO</li>
                </ul>
            </nav>  
        </nav>