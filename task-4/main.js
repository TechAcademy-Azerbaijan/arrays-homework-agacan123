const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let numbers = result.input.split(" ")
    let arr =[]
    for (let i= 0; i<numbers.length -1; i++){
const element = parseInt(element[i])
const next_element = parseInt( element[i+1])
if ( element < next_element){

    arr.push(next_element)
}


    }
    console.log(numbers [i+1]);
  
});
