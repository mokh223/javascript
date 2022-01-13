let arrs = [3,9,6,12,7,20,1,18];
console.log(arrs);

let result = arrs.some(t =>{
    console.log(t);
    if (t === 314) return true;
})
console.log(result);

result = arrs.some(t =>{
    console.log(t);
    if (t === 3) return true;
})
console.log(result);