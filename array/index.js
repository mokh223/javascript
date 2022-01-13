const h1_element1 = document.getElementById('idH1_1');
h1_element1.innerText = 'Hello World';

let numbers = [1, 2, 3, 4]; 
let one = numbers[0], two = numbers[1], three = numbers[2], four = numbers[3];
console.log(one);  
console.log(two);  
console.log(three);  
console.log(four);  
let [one2,,, four2] = numbers;
console.log(one2);  
console.log(four2);  
let [,,three2] = numbers;
console.log(three2);  

console.log('reduce');

let red = (arr) => {
    let total = arr.reduce((accumulator, currentValue) => accumulator+currentValue);
    return total;
}

console.log(red(numbers));


const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
let filterItems = (arr, text) => {
    const result = arr.map(t=>{
        return {
            name : t,
            value : t.indexOf(text)
        };
    });
    console.log(result);

    const result2 = result.map(x=> {
        return {
            ...x,
            hello: 1
        };
    });
    console.log(result2);
    return result2;
}


console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']
console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']