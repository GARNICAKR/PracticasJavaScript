let Array=["1","2","3","4","5","6"];

Array.push(3);//Inserta al final del arreglo 
Array.unshift(10);//Inserta al inicio del arreglo
Array.pop();//Elimina el ultimo Elemento del arrelglo
Array.shift();//Elimina el primer elemento del arreglo
Array.length;//Es la longitud del Arreglo
Array.indexOf("3");//Busca un elemento en el arreglo y retorna la posicion

//Retorna true o false si el elemento se encuentra en el arreglo
//Puedes agregar un segundo parametro que puedes indicar de donde empezar a buscar.
Array.includes("5",2);

//Busca un elemento y retorna el elemento
//Solo que tu decides como encontrarlo
let Buscado=Array.find((element,indice,Array)=>{
    return element === "4"
});
//Busca un elemento y retorna la posicion donde encontro el elemento
let posicion=Array.findIndex((element,indice,Array)=>{
    return element === "4"
});
//Busca un elemento y retorna true o false
let Bolean=Array.some((element,indice,Array)=>{
    return element === "4"
});

/*
El forEach su primer parametro es el elemento en el que va la iteracion
El segundo es el indice
El tercero es el array completo
*/
Array.forEach((element,indice,Array) => {
    console.log(element);
});

// MAP
//Map retorna un nuevo arreglo
//Map tiene los mismos parametros del foreach
let Cuadrado=Array.map(element=>{
    return parseInt(element)*parseInt(element);
});
console.log(Cuadrado);
//Filter
//Filter filtra el arreglo con alguna condicion
let ArregloFiltrado =Array.filter(element=>{
    return element % 2 ===0;
});
console.log(ArregloFiltrado);

//Reduce
//acc el primer parametro toma el valor de lo ultimo que se retorno 
let suma=Array.reduce(acc,element=>{
    return acc+parseInt(element);
},0);
console.log(suma);
//Los ... imprime el Array por separado en ves de [1,2] a 1 2
console.log(...Array);

//En este caso entran numeros separados y se convierten en un arreglo
function prueba(...arr){
    console.log(arguments);//arguments son todos los parametros de la funcion en un objeto
    console.log(arr);
}
prueba(1,3,4,5);