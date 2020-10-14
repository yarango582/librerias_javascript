
let arregloNumbers = [1,2,3,4,5];
let arregloFruits = ['Fresa', 'Mora', 'Naranja', 'Coco'];


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
    
}

// myForEach(arregloNumbers, (number, index) =>{
//     console.log(`Indice actual: ${index} objeto: ${number}`);
// });

// let ar = myFilter(arregloFruits, (fruit) => fruit === 'Coco');
// console.log(ar);
