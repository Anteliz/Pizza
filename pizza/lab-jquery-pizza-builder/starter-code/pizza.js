// Write your Pizza Builder JavaScript in this file.

let visiblepeproni = 0;
let visiblepepper = 0;
let visiblemushroom = 0;
let visiblesauce = 0;
let visiblegluten = 0;



function mostrarOcultarPeppers(){
    let pepper = document.querySelectorAll('.green-pepper');
    if(visiblepepper === 1){
        $(pepper).css('visibility', 'visible');
        visiblepepper = 0;
    }
    else{
        $(pepper).css('visibility', 'hidden');
        visiblepepper = 1;
    }
}

function mostrarOcultarPeperoni(){
    let peperoni = document.querySelectorAll('.pep');
    if(visiblepeproni === 1){
        $(peperoni).css('visibility', 'visible');
        visiblepeproni = 0;
    }
    else{
        $(peperoni).css('visibility', 'hidden');
        visiblepeproni = 1;
        let buttonpep = document.querySelector('.btn btn-pepperonni active');
        let paragraphClass = paragraph.setAttribute('class', 'btn btn-pepperonni');
    }
}

function mostrarOcultarMushroom(){
    let mushroom = document.querySelectorAll('.mushroom');
    if(visiblemushroom === 1){
        $(mushroom).css('visibility', 'visible');
        visiblemushroom = 0;
    }
    else{
        $(mushroom).css('visibility', 'hidden');
        visiblemushroom = 1;
    }
}

function quitarPonerSauce(){
    let sause = document.querySelector(".sauce");
    if(visiblesauce === 1){
        $(sause).css('visibility', 'visible');
        visiblesauce = 0;
    }
    else{
        $(sause).css('visibility', 'hidden');
        visiblesauce = 1;
    }
}

function conSinGluten(){
    let gluten = document.querySelector(".crust");
    if(visiblegluten === 1){
        $(gluten).css('visibility', 'visible');
        visiblegluten = 0;
    }
    else{
        $(gluten).css('visibility', 'hidden');
        visiblegluten = 1;
    }
}
