const url = ["1.gif", "2.gif", "3.gif"];
let run = true;
let count = 1;
let x =0;

let izq = document.getElementById("izq");
let der = document.getElementById("der");
let imagen = document.getElementById("imagen");
let puntos = document.getElementsByClassName("punto");


function cizq(){
    run = false;
    if(x==0){
        x = url.length-1;
    }else{
        x = x-1
    }
    console.log(x);
}

function cder(){
    run = false;
    if(x==url.length-1){
        x = 0;
    }else{
        x = x+1
    }
    console.log(x);
}

function change(){
    imagen.style.background = "url('"+url[x]+"')";
    imagen.style.transition = "0.5s";
    for (let i = 0; i < url.length; i++) {
        puntos[i].style.background = "none";
    }
    puntos[x].style.background = "linear-gradient(to right, red, purple)";
}

function pos(){
    imagen.style.backgroundSize="cover";
    imagen.style.backgroundPosition= "center";
}

izq.addEventListener('click', ()=>{ cizq(); change(); pos();});
der.addEventListener('click', ()=>{ cder(); change(); pos();});