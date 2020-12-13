let p = new Promise((resolve, reject)=>{
  let a = 1+1;
  if (a == 2){
    resolve("Success");
  } else {
    reject('Failed');
  }
});
/*
p.then((message)=>{
  console.log(`This is in the then ${message}`);
}).catch((message)=>{
  console.log(`This is in the catch ${message}`);
})
*/
let q = (message) => new Promise((resolve,reject) => {
  console.log('inside q = ' + message);
  let a = 1+1;
  if (a == 2){
    resolve("Success");
  } else {
    reject('Failed');
  }
});

p.then((message)=>{
  q(message).then(message => console.log(message)).catch(message => console.log(message));
}).catch((message)=>{
  console.log(`This is in the catch ${message}`);
})