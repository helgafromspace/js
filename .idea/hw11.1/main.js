// function greet(name){
//     name = name || 'me'
//     return `${name}`
// }

// let s = 4.454;
// s1 = s.toFixed(2)
// console.log(typeof(s))
// console.log(typeof(s1))
// console.log(typeof(parseInt(s1)))

function checkProbabilityTheory(count){
    let countEven = 0; // парні
    let countOdd = 0; // непарні
    for (let i = 0; i < count; i++){
        let num = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        console.log(num);
        (num % 2 == 0) ? countEven++ : countOdd++;
        console.log(countEven)
        console.log(countOdd)
    }
    let evenToOddPercent = (countEven  / countOdd) * 100;
   return `Кількість згенерованих чисел: ${count}; Кількість парних: ${countEven}; Кількість непарних:${countOdd}; Відсоток парних до непарних:${evenToOddPercent} %` 
}

console.log(checkProbabilityTheory(3))