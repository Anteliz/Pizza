// Write your Pizza Builder JavaScript in this file.

let visiblepeproni = 0;
let visiblepepper = 0;
let visiblemushroom = 0;
let visiblesauce = 0;
let visiblegluten = 0;
let precioInicial = 21;

const pepper = document.querySelectorAll('.green-pepper');
const peperoni = document.querySelectorAll('.pep');
const mushroom = document.querySelectorAll('.mushroom');
const gluten = document.querySelector('.crust');
const sause = document.querySelector('.sauce');
const cheese = document.querySelector('.cheese');
cheese.style.visibility = 'visible';

const btpepper = document.querySelector('.btn-green-peppers');
const btpep = document.querySelector('.btn-pepperonni');
const btmushroom = document.querySelector('.btn-mushrooms');
const btsauce = document.querySelector('.btn-sauce');
const btgluten = document.querySelector('.btn-crust')

const precioPep = document.querySelector('.price li:nth-child(1)');
const precioMushroom = document.querySelector('.price li:nth-child(2)');
const precioPepper = document.querySelector('.price li:nth-child(3)');
const precioSauce = document.querySelector('.price li:nth-child(4)');
const preciogluten = document.querySelector('.price li:nth-child(5)');

precio(0); 

btpepper.onclick = function(){

    if(visiblepepper === 1){
        visiblepepper = 0;
        precio(1);
        btpepper.setAttribute('class', 'btn btn-green-peppers active');
        for(let i = 0; i < pepper.length; i++){
            pepper[i].style.visibility = 'visible';
        }
        precioPepper.style.visibility = 'visible';

    }
    else{
        visiblepepper = 1;
        precio(-1);
        btpepper.setAttribute('class', 'btn btn-green-peppers');
        for(let i = 0; i < pepper.length; i++){
            pepper[i].style.visibility = 'hidden';
        }
        precioPepper.style.visibility = 'hidden';
    }
}

btpep.onclick = function(){

    if(visiblepeproni === 1){
        visiblepeproni = 0;
        precio(1);
        btpep.setAttribute('class', 'btn btn-pepperonni active');
        for(let i = 0; i < peperoni.length; i++){
            peperoni[i].style.visibility = 'visible';
        }
        precioPep.style.visibility = 'visible';
    }
    else{
        visiblepeproni = 1;
        precio(-1);
        btpep.setAttribute('class', 'btn btn-pepperonni');
        for(let i = 0; i < peperoni.length; i++){
            peperoni[i].style.visibility = 'hidden';
        }
        precioPep.style.visibility = 'hidden';
    }
}

btmushroom.onclick = function(){

    if(visiblemushroom === 1){
        visiblemushroom = 0;
        precio(1);
        btmushroom.setAttribute('class', 'btn btn-mushrooms active');
        for(let i = 0; i < mushroom.length; i++){
            mushroom[i].style.visibility = 'visible';
        }
        precioMushroom.style.visibility = 'visible';
    }
    else{
        visiblemushroom = 1;
        precio(-1);
        btmushroom.setAttribute('class', 'btn btn-mushrooms');
        for(let i = 0; i < mushroom.length; i++){
            mushroom[i].style.visibility = 'hidden';
        }
        precioMushroom.style.visibility = 'hidden';
    }
}

btsauce.onclick = function(){   

    if(visiblesauce === 1){
        visiblesauce = 0;
        precio(3);
        btsauce.setAttribute('class', 'btn btn-sauce active');
        sause.style.visibility = 'visible';
        precioSauce.style.visibility = 'visible';
    }
    else{
        visiblesauce = 1;
        precio(-3);
        btsauce.setAttribute('class', 'btn btn-sauce');
        sause.style.visibility = 'hidden';
        precioSauce.style.visibility = 'hidden';
    }
}

btgluten.onclick = function(){  
    
    if(visiblegluten === 1){
        visiblegluten = 0;
        precio(5);
        btgluten.setAttribute('class', 'btn btn-crust active');
        gluten.style.visibility = 'visible';
        preciogluten.style.visibility = 'visible';
    }
    else{
        visiblegluten = 1;
        precio(-5);
        btgluten.setAttribute('class', 'btn btn-crust');  
        gluten.style.visibility = 'hidden';
        preciogluten.style.visibility = 'hidden';
    }
}

function precio(costo){
    precioInicial += costo;
    let price = document.querySelector('Strong');
    price.textContent = '$'+precioInicial;
}
