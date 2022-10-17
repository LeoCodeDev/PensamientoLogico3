let maxima = 0;
let array = [1,2,3,4,5,6,7,8,9];

for(i = 0; i < array.length; i++){
    if(array[i] > maxima){
        maxima = array[i];
    }
}

console.log(`El valor mas alto del array es ${maxima}`);