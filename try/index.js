let p = name => {
  try{
    console.log('hello ' + name);
  }finally{
    console.log ('finally');
  }
};

let q = name => {
  try{
    throw new EvalError('lol');
  }catch(e){
    console.log (e);
    console.log (e.name);
    console.log (e.message);
  }
};

let r = () =>{
  alert("There will be an error");
  [1, 2].forEach(alert);
}


p('abu');
q('ali');
r();