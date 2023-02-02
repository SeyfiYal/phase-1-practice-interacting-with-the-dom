const h1Counter = document.querySelector("#counter")
//console.log(h1Counter)

const plusButton = document.querySelector("#plus")
//console.log(plusButton)
const minusButton = document.querySelector("#minus")

const heartButton = document.querySelector("#heart")

const pauseButton = document.querySelector("#pause")

let count = 0;
function increment(){
    count = count + 1
    h1Counter.innerText = count
    return count    
}

function decrease(){
    count = count - 1
    h1Counter.innerText = count
    return count 
}

function heart(){
    
}


plusButton.addEventListener("click",increment)
    alert("I was clicked")

minusButton.addEventListener("click",decrease)