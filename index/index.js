function handleClick(value){
    console.log(`click ${value}`);
}

document.getElementById('div2').addEventListener('click',e=>{
    console.log('click div2');
});
document.getElementById('button2').addEventListener('click',e=>{
    console.log('click button2');
});


document.getElementById('button3').addEventListener('click',e=>{
    console.log('click button3');
});
document.getElementById('div3').addEventListener('click',e=>{
    console.log('click div3');
});

document.getElementById('div4').addEventListener('click',e=>{
    console.log('click div4');
},true);
document.getElementById('button4').addEventListener('click',e=>{
    console.log('click button4');
},true);


document.getElementById('button5').addEventListener('click',e=>{
    console.log('click button5');
},true);
document.getElementById('div5').addEventListener('click',e=>{
    console.log('click div5');
},true);

window.onload = (event) =>{
    console.log('on load');
    document.querySelector('.outerDiv').addEventListener('click', displayOuterMessage);
    document.querySelector('.innerDiv').addEventListener('click', displayInnerMessage);
}

function displayOuterMessage(){
    console.log('display outer message');
}

function displayInnerMessage(){
    console.log('display inner message');
}