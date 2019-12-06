// Write your Pizza Builder JavaScript in this file.

let visiblepeproni = 0;
let visiblepepper = 0;
let visiblemushroom = 0;
let visiblesauce = 0;
let visiblegluten = 0;
let precioInicial = 21;

let pepper = document.querySelectorAll('.cheese');
$(pepper).css('visibility', 'visible');
precio(0);

function mostrarOcultarPeppers(){
    let pepper = document.querySelectorAll('.green-pepper');
    if(visiblepepper === 1){
        $(pepper).css('visibility', 'visible');
        visiblepepper = 0;
        $('.btn-green-peppers').addClass('active');
        document.getElementById('pricepepper').style.display = 'block';
        precio(1);
    }
    else{
        $(pepper).css('visibility', 'hidden');
        visiblepepper = 1;
        $('.btn-green-peppers').removeClass('active');
        document.getElementById('pricepepper').style.display = 'none';
        precio(-1);
    }
}

function mostrarOcultarPeperoni(){
    let peperoni = document.querySelectorAll('.pep');
    if(visiblepeproni === 1){
        $(peperoni).css('visibility', 'visible');
        visiblepeproni = 0;
        $('.btn-pepperonni').addClass('active');
        document.getElementById('pricepep').style.display = 'block';
        precio(1);
    }
    else{
        $(peperoni).css('visibility', 'hidden');
        visiblepeproni = 1;
        $('.btn-pepperonni').removeClass('active');
        document.getElementById('pricepep').style.display = 'none';
        precio(-1);
    }
}

function mostrarOcultarMushroom(){
    let mushroom = document.querySelectorAll('.mushroom');
    if(visiblemushroom === 1){
        $(mushroom).css('visibility', 'visible');
        visiblemushroom = 0;
        $('.btn-mushrooms').addClass('active');
        document.getElementById('pricemushroom').style.display = 'block';
        precio(1);
    }
    else{
        $(mushroom).css('visibility', 'hidden');
        visiblemushroom = 1;
        $('.btn-mushrooms').removeClass('active');
        document.getElementById('pricemushroom').style.display = 'none';
        precio(-1);
    }
}

function quitarPonerSauce(){
    let sause = document.querySelector(".sauce");
    if(visiblesauce === 1){
        $(sause).css('visibility', 'visible');
        visiblesauce = 0;
        $('.btn-sauce').addClass('active');
        document.getElementById('pricesauce').style.display = 'block';
        precio(3);
    }
    else{
        $(sause).css('visibility', 'hidden');
        visiblesauce = 1;
        $('.btn-sauce').removeClass('active');
        document.getElementById('pricesauce').style.display = 'none';
        precio(-3);
    }
}

function conSinGluten(){
    let gluten = document.querySelector(".crust");
    if(visiblegluten === 1){
        $(gluten).css('visibility', 'visible');
        visiblegluten = 0;
        $('.btn-crust').addClass('active');
        document.getElementById('pricegluten').style.display = 'block';
        precio(5);
    }
    else{
        $(gluten).css('visibility', 'hidden');
        visiblegluten = 1;
        $('.btn-crust').removeClass('active');
        document.getElementById('pricegluten').style.display = 'none';
        precio(-5);
    }
}

function precio(costo){
    precioInicial += costo;
    let price = document.querySelector('Strong');
    price.textContent = '$'+precioInicial;
}
