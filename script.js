



let contenedorGrid = document.querySelector('div#container');
let botonPixels = document.querySelector('button#pixels');
let botonLimpiar = document.querySelector('button#limpiar');


botonLimpiar.addEventListener('click',()=>{
    contenedorGrid.innerHTML="";
})

const crearCuadricula = (tamaño)=>{

      let total = tamaño * tamaño;

 for(let j=0;j<total;j++){
            let divCreado = document.createElement('div');
            divCreado.style.width= `calc(100% / ${tamaño})`;
         
            contenedorGrid.appendChild(divCreado);
        }

         let divs = contenedorGrid.querySelectorAll('div');

    divs.forEach(div=>div.addEventListener('mouseover',()=>{
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    div.style.backgroundColor=`rgb(${r},${g},${b})`;
}));
}

botonPixels.addEventListener('click',()=>{
     contenedorGrid.innerHTML = "";
    let tamaño = Math.floor(parseInt(prompt('¿De que tamaño quieres la cuadrícula?')));
    
    if(tamaño<=100&&tamaño>0&&!isNaN(tamaño)){
       
        crearCuadricula(tamaño); 
    
    }else{
       alert("Tamaño incorrecto, debe ser entre 1 y 100");
       return crearCuadricula(16);
    }

   
    
})


crearCuadricula(16);





//console.log(contenedorGrid.children.length)//propiedad para calcular todos los hijos del container






/*divs.forEach(div=>div.addEventListener('mouseout',()=>{
    div.style.backgroundColor="white";
}))*/