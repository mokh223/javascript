const myFunction = arr =>{
  return arr.reduce((result,current) =>{
    return result = current;
  },10)
}

console.log(myFunction([]));

console.log('object book');

const objBook = {
  Title : 'Javascript'
};
Object.preventExtensions(objBook);
const newObjBook = objBook;
newObjBook.author = 'Robert';
console.log('objBook');
console.log(objBook);
console.log('newObjBook');
console.log(newObjBook);