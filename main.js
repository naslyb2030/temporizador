// Funciones con parametros de funciones

// let s1=calcular(10,5,function(v1,v2){
//     return v1+v2;
// })
// document.write(s1+'<br>');

// let s2=calcular(10,5,function(v1,v2){
//     return v1-v2;
// })
// document.write(s2+'<br>');

// let s3=calcular(12,12,function(v1,v2){
//     return v1*v2;
// })
// document.write(s3+'<br>');

// function sumar(x,y){
//     return x+y
// } 
// document.write(calcular(10,5,sumar))
//Funciones con parametros por defecto

// function sumar(x,y,z=0){
//     let suma = x+y+z
//     return suma
// }
// console.log(sumar(1,2));
// console.log(sumar(3,5,7));

//Funciones con parametro REST/SPREAD
//REST reciba todos los valores individuales como si fueran un arreglo
// function sumar (...valores){
// let suma=0
// for (let i = 0; i < valores.length; i++) {
//     suma=suma+valores[i];
// }
// return suma
// }
// document.write(sumar(10,20,30,40,50,60,70,80,90,100))

//SPREAD Convierte o descompone una estructura de datos (array) en valores individuales.
// let numerosbase=[10,20,30,40]
// let numeroscopia=[...numerosbase]
// numerosbase.push(50)

// let empresa=['COEX','CONOCIMIENTO','EXPONENCIAL']
// const laEmpresa=['El nombre','de mi empresa','es']
// console.log(laEmpresa,empresa)
// console.log([laEmpresa,empresa])
// console.log([laEmpresa,...empresa])

// let arreglo=[3,5,1,'6']
// alert (Math.max(...arreglo))

//DESTRUCTURACION
// let numeros =[1,2,3,4,5]
// const [num1,num2,num3,num4,num5]=numeros

// const usuario={
//     nombre: 'Jonas',
//     apellido:'nomelose',
//     edad: 130
// }
// console.log(usuario.nombre)
// const {nombre,apellido,edad}=usuario

//RECURSION
// function parImpar(num){
//     if (num===0) {
//         return 'par'
//     }else if(num===1){
//         return 'impar'
//     }else{
//         return parImpar(num-2)
//     }
// }
// let num=prompt('Digite un numero')
// document.body.innerText=(num+' '+parImpar(num))

// function potenciar(base,poten){
//     if (poten===1){
//         return base
//     } else{
//         return base*potenciar(base,poten-1)
//     }   
// }

// console.log(potenciar(3,4))
function activador(){
        let num=document.getElementById('segundos').value
        temporizador(num)
    function temporizador(num) {
        if (num<=0) {
            return document.getElementById('contador').textContent='finish'
        }else{
            document.getElementById('contador').textContent=num;
            return setTimeout(temporizador,1000,num-1)
        }
    }
}


let boton=document.getElementById('inicio');
boton.addEventListener('click',activador)

