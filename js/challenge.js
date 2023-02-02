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
    
    const likeContainer = document.querySelector(".likes")
    const newLike = document.createElement("li")
    const likedText = `${count} has been liked `
    newLike.textContent = likedText
    likeContainer.append(newLike)
}

heartButton.addEventListener("click",heart)

plusButton.addEventListener("click",increment)
    alert("I was clicked")

minusButton.addEventListener("click",decrease)