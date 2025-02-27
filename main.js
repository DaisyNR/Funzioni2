let numero = +prompt('scegli un numero da 1 a 50')
function number(n) {
    for (let i = 1; i <= n; i++) {
        if(i % 15 == 0){
         console.log('fizzBuzz');
        }else if(i % 3 == 0) {
        console.log('Fizz');
       }else if(i % 5 == 0){
        console.log('Buzz');
       }else{
        console.log(i);
       }
    }
}
number(numero)