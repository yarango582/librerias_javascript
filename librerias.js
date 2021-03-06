
let arregloNumbers = [1,2,3,4,5];
let arregloFruits = ['Fresa', 'Mora', 'Naranja', 'Coco', 'Fresa'];
let letras = 'ABCDEFG';
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
let arrayNumbers = [1, 2, 1, 0, 3, 1, 4];

function myForEach(array, callback){

    let index = 0;

    for(let i = 0; i<array.length; i++){
        callback(array[i], index = i);
    }
   
}

function myFilter(array, callback){

    let newArray = [];

    for(let i = 0; i<array.length; i++){
        if(callback(array[i])){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

function myMap(array, callback){

    let newArray = [];

    array.forEach(function (element, index, array){
        newArray.push(callback(element));
    })
    return newArray;
}

function myFind(array, callback){


    for(let i=0; i<array.length; i++){

        if(callback(array[i]) === true){
            return array[i];
        }
    }
}

function myFindIndex(array, callback){

    for(let i=0; i<array.length; i++){

        if(callback(array[i]) === true){
            return array.indexOf(array[i], i);
        }
    }
}

function MyContains(array, dataSearch, index){

    for(let i = index; i<array.length; i++){

        if(array[i] == dataSearch){
            return true
        }else{
            return false
        }
    }

}

function myPluck(array, propertyName){

    let newArray = [];
    
    array.forEach((element) => {
        newArray.push(element[propertyName]);
    })

    return newArray;
}

function myWithout(array, data){

    let newArray = [];

    for(let i= 0; i<array.length; i++){

        if(array[i] === data){
            array.splice(i, 1);
        }
    }
    newArray.push(array);
    return newArray;
}

// let a =myWithout(arrayNumbers, 4);
// console.log(a);

// let arrayPrueba = myPluck(stooges, 'name');
// console.log(arrayPrueba);

// myForEach(arregloNumbers, (number, index) =>{
//     console.log(`Indice actual: ${index} objeto: ${number}`);
// });

// let ar = myFilter(arregloFruits, (fruit) => fruit === 'Coco');
// console.log(ar);

// let misFrutas = myMap(arregloFruits, (fruta) =>{
//      (fruta === 'Fresa') ? console.log(fruta) : 'false';
// })

// let frutaBuscada = myFindIndex(arregloFruits, (fruta) => fruta.length < 5);
// console.log(frutaBuscada);

// let frutaBuscada = myFind(arregloFruits, (fruta) => fruta.length < 5);
// console.log(frutaBuscada);

// console.log(myContains(letras, 'Z'))