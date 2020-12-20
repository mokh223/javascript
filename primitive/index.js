let var1 = 'abc' + 123 + 'def' + 3 / 2;
console.log(var1);

var1 = 123 + '234' + 345 + 'def' + 3 / 2;
console.log(var1);

var1 = '123' + '234' + 345 + 'def' + 3 / 2;
console.log(var1);

var1 = new Number('123' + '234' + 345) + 'def' + 3 / 2;
console.log(var1);

var1 = new Number('123' ) + 3 / 2;
console.log(var1);

var1 = eval('123' ) + 3 / 2;
console.log(var1);

var1 = eval('  123  ' ) + 3 / 2;
console.log(var1);