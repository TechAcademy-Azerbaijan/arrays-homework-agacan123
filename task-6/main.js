const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
   let numbers = result.input.split(" ")
   let max = parseInt (numbers[0])
   let min = parseInt (numbers[0])
   for (let i = 0 ; i < numbers.length; i++){
const element = parseInt (numbers[i])

    console.log(numbers);


   }
  
});
    
  

