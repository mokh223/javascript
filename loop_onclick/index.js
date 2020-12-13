var elements = document.getElementsByTagName('li');
var n = elements.length;    // assume we have 10 elements for this example
for (var i = 0; i < n; i++) {
   elements[i].onclick = function() {
      const hardcode = i;
      console.log("This is element #" + hardcode);
   };
}

let onClickFunction = num =>{
  return function(){
    console.log(num);

  }
}

var elements2 = document.getElementsByTagName('p');
var n2 = elements2.length;    // assume we have 10 elements for this example
for (var i = 0; i < n2; i++) {
    elements2[i].onclick =  onClickFunction(i);
}

