let arrs = [1,2,3,4,5,6];
let obj = {fname:"John", lname:"Doe", age:25};

for(let arr of arrs){ 
    console.log(arr);
}

for(let o in obj){ 
    console.log(`${o} = ${obj[o]}`);
}
