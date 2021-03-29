const btnEqual = document.querySelector('#equal')
const inputDiv = document.querySelector('#view-fscreen-input')
const resDiv = document.querySelector('#view-rscreen')

function printOnInput(value){
    inputDiv.innerHTML += `${value}`  
}

function calculate(){
    countText = inputDiv.innerHTML
    countTextSplited = countText.replace()
    resDiv.innerHTML = `${countTextSplited}`
}

//FAZER 
