// function greet(name){
//     name = name || 'me'
//     return `${name}`
// }

// let s = 4.454;
// s1 = s.toFixed(2)
// console.log(typeof(s))
// console.log(typeof(s1))
// console.log(typeof(parseInt(s1)))
// let s = 'h'
// console.log(s.length)
// let s1 = s.padStart(5,'*')
// console.log(s1.length)
// console.log(s1)

var services = {
"стрижка": "60 грн",
"гоління": "80 грн",
"Миття голови": "100 грн",
'price': function() {
    let sum = 0;
    for (key in services){
        if (typeof(services[key]) == 'string'){
            let num = parseInt(services[key]);
            sum += num;
        }
    }
    return sum
},
'minPrice': function (){
    min = services.price()
    for (key in services){
        if (typeof(services[key]) == 'string'){
            let num = parseInt(services[key]);
            if(num < min){
                min = num;
            }
            }
        }
    return `min ${min}`
    },
'maxPrice': function (){
    max = 0
    for (key in services){
        if (typeof(services[key]) == 'string'){
            let num = parseInt(services[key]);
            if(num > max){
                max = num;
            }
            }
        }
    return `max ${max}`
}
}

console.log(services.price())
console.log(services.minPrice())
console.log(services.maxPrice())
