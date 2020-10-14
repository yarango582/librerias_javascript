
let arregloNumbers = [1,2,3,4,5];
let arregloFruits = ['Fresa', 'Mora', 'Naranja', 'Coco', 'Fresa'];


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




// myForEach(arregloNumbers, (number, index) =>{
//     console.log(`Indice actual: ${index} objeto: ${number}`);
// });

// let ar = myFilter(arregloFruits, (fruit) => fruit === 'Coco');
// console.log(ar);

// let misFrutas = myMap(arregloFruits, (fruta) =>{
//      (fruta === 'Fresa') ? console.log(fruta) : 'false';
// })

// let frutaBuscada = myFind(arregloFruits, (fruta) => fruta.length < 5);
// console.log(frutaBuscada);