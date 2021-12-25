// create an array of numbers from 1 to 100
// if the number is evenly divisible by 3 then insert Fizz 
// if the number is evenly divisible by 5 then insert Buzz 
// but if the number is evenly divisible by 15 then insert FizzBuzz 


const array = [];

for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 15 !== 0) {
        array.push("Fizz");
    } else if (i % 5 === 0 && i % 15 !== 0) {
        array.push("Buzz");
    } else if (i % 15 === 0) {
        array.push("FizzBuzz");
    } else {
        array.push(i);
    }
}

console.log(array);