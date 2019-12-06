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
const gluten = document.querySelector(".crust-gluten-free");
const sause = document.querySelector(".sauce-white");
const cheese = document.querySelector('.cheese');
console.log(cheese);


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
            pepper[i].style.display = 'block';
        }
        precioPepper.style.display = 'block';

    }
    else{
        visiblepepper = 1;
        precio(-1);
        btpepper.setAttribute('class', 'btn btn-green-peppers');
        for(let i = 0; i < pepper.length; i++){
            pepper[i].style.display = 'none';
        }
        precioPepper.style.display = 'none';
    }
}

btpep.onclick = function(){

    if(visiblepeproni === 1){
        visiblepeproni = 0;
        precio(1);
        btpep.setAttribute('class', 'btn btn-pepperonni active');
        for(let i = 0; i < peperoni.length; i++){
            peperoni[i].style.display = 'block';
        }
        precioPep.style.display = 'block';
    }
    else{
        visiblepeproni = 1;
        precio(-1);
        btpep.setAttribute('class', 'btn btn-pepperonni');
        for(let i = 0; i < peperoni.length; i++){
            peperoni[i].style.display = 'none';
        }
        precioPep.style.display = 'none';
    }
}

btmushroom.onclick = function(){

    if(visiblemushroom === 1){
        visiblemushroom = 0;
        precio(1);
        btmushroom.setAttribute('class', 'btn btn-mushrooms active');
        for(let i = 0; i < mushroom.length; i++){
            mushroom[i].style.display = 'block';
        }
        precioMushroom.style.display = 'block';
    }
    else{
        visiblemushroom = 1;
        precio(-1);
        btmushroom.setAttribute('class', 'btn btn-mushrooms');
        for(let i = 0; i < mushroom.length; i++){
            mushroom[i].style.display = 'none';
        }
        precioMushroom.style.display = 'none';
    }
}

btsauce.onclick = function(){   

    if(visiblesauce === 1){
        visiblesauce = 0;
        precio(3);
        btsauce.setAttribute('class', 'btn btn-sauce active');
        sause.style.display = 'block';
        precioSauce.style.display = 'block';
    }
    else{
        visiblesauce = 1;
        precio(-3);
        btsauce.setAttribute('class', 'btn btn-sauce');
        sause.style.display = 'none';
        precioSauce.style.display = 'none';
    }
}

btgluten.onclick = function(){  
    
    if(visiblegluten === 1){
        visiblegluten = 0;
        precio(5);
        btgluten.setAttribute('class', 'btn btn-crust active');
        gluten.style.display = 'block';
        preciogluten.style.display = 'block';
    }
    else{
        visiblegluten = 1;
        precio(-5);
        btgluten.setAttribute('class', 'btn btn-crust');  
        gluten.style.display = 'none';
        preciogluten.style.display = 'none';
    }
}

function precio(costo){
    precioInicial += costo;
    let price = document.querySelector('Strong');
    price.textContent = '$'+precioInicial;
}
