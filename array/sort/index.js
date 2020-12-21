let arrs = [3,9,6,12,7,20,1,18];
console.log(arrs);

arrs.sort((x,y)=>{return x-y;})
console.log(arrs);

arrs.sort((x,y)=>{return y-x;})
console.log(arrs);
