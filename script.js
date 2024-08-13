let menuVisible = false;
//Función que oculta o muestra el menú
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menú una vez que seleccionó una opción
    document.getElementById("nav").classList="";
    menuVisible = false;
}

//función que aplica las animaciones de las habilidades (para que las barras hagan sus efectos)
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("html&css");
        habilidades[2].classList.add("htmlcss");
    }
}

// detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll= function(){
    efectoHabilidades();
}