
const clickable = document.getElementById('clickable');
const count = document.getElementById('count');
const resetBtn = document.getElementById('resetBtn');
let countNum = 0;

const counter = ()=>{
    if(countNum <= 108){
        console.log(countNum);
        count.innerHTML = `${++countNum}`
    }
}

const resetCount = () =>{
    countNum = 0
    count.innerHTML = `${countNum}`
}

clickable.addEventListener('click' , counter)
resetBtn.addEventListener('click' , resetCount)