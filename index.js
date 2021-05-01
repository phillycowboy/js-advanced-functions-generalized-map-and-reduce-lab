// Add your functions here


function map(array, callback){
    let newArr = []
    for(let a of array){
        newArr.push(callback(a));
    }
    return newArr;
}

function reduce(array, callback, startingPoint){
    let value;
    if (startingPoint){
         value = startingPoint;
         for(let a of array){
             value = callback(a, value);
         }
    }else{
         value = array[0]
         for(let i = 1; i < array.length; i++){
           value = callback(array[i], value)
         }
    }
    return value;
}
