flag();

function flag(){
  console.log('flag');

  const anotherFlag = () => {
    console.log('another flag');
  }
}

name ="Arrow function"
let me = { 
 name: "Regular function", 
 thisInArrow:() => { 
   console.log("Example of " + this.name); //no 'this' binding here 
 }, 
 thisInRegular(){ 
   console.log("Example of " + this.name); //'this' binding works here 
 } 
};
me.thisInArrow(); 
me.thisInRegular();

const calculate = (num) =>{
  return (Number(num + 10) / 3);
}

console.log(calculate(8));

const resolveAfterMs = (ms,msg) => {
  setTimeout(() => {
    console.log(msg);
  }, ms);
}

async function asyncFunct(){
  const aPromis = await resolveAfterMs(500, 'promiseA');
  const bPromis = await resolveAfterMs(500, 'promiseB');
  await bPromis, await aPromis; //no different and didnt do anything

}

asyncFunct();

console.log('o.js.secondCity');
let o = {
  get js(){
    let city1 = String("st lois");
    let city2 = String("new york");

    return {
      firstCity : city1.toLowerCase(),
      secondCity : city2.toLowerCase()
    }
  }
}

console.log(o.js.secondCity);