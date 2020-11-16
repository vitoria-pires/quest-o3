let m = [21, 38, 22, 25, 26, 10, 68, 07, 15, 02];

function buscarMaior(array) {
    if(array.length < 1) {
    }
    var maior = array[0]; 
    
    for (let i = 1; i < array.length; ++i){

        if (array[i] > maior){ 
            maior = array[i]; 
        }
    }
    
    return maior;
}
console.log(buscarMaior(m));