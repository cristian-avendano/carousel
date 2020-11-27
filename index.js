let opciones = ["1.jpg", "2.jpg", "3.gif"];
let cont = document.getElementById("imagen"); 
let x = 0;
let izq = document.getElementById("a-izq");
let der = document.getElementById("a-der");

izq.addEventListener('click', ()=>{
    cizq();
    change();
    pos();
})

der.addEventListener('click', ()=>{
    cder();
    change();
    pos();
})


function pos(){
    cont.style.backgroundSize="cover";
    cont.style.backgroundPosition= "center";
}

function change(){
    cont.style.background = "url('"+opciones[x]+"')";
    cont.style.transition = "0.5s";
}

function fadeIn(el) {
    el.style.opacity = 0;
    var tick = function () {
        el.style.opacity = +el.style.opacity + 0.02;
        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        }
    };
    tick();
}

function myFunction() {
    fadeIn(cont);
}

function cder(){
    if(x==opciones.length-1){
        x = 0;
    }else{
        x = x+1
    }
    console.log(x);
}

function cizq(){
    if(x==0){
        x = opciones.length-1;
    }else{
        x = x-1
    }
    console.log(x);
}