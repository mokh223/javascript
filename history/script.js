"use strict";
let boxes = Array.from(document.getElementsByClassName('box'));
function selectedBox(id){
    console.log('try');
    boxes.forEach(b => {
        b.classList.toggle('selected', b.id===id);
    })
}
boxes.forEach(b => {
    let id = b.id;
    b.addEventListener('click', e=> {
        console.log('push state');
        history.pushState({id},`Selected: ${id}`, `./selected=${id}`);
        selectedBox(id);
    })
})

window.addEventListener('popstate', e=>{
    console.log('pop state');
    if (e.state !== null)
        selectedBox(e.state.id);
})