const str = "Salesforce";

console.log('substr start');
console.log(str.substr(0,5));
console.log(str.substr(-10,5)); //if start is negative. Default to 0
console.log(str.substr(100,5)); //if start is greater than string length. Default to 0
console.log(str.substr(-100,5)); //if start is greater than string length. Default to 0
console.log('substr end');


console.log('slice start');
console.log(str.slice(0,5));
console.log(str.slice(5,0));
console.log('slice end');


console.log('substring start');
console.log(str.substring(0,5));
console.log(str.substring(5,0));
console.log('substring end');


console.log('Stringify'.substring(5,8));
console.log('Stringify'.substring(8,5));
console.log('Stringify'.slice(5,8));