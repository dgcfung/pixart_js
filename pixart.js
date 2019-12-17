
let setUpEventListeners= function(){
    check4Submission()
    
}



function check4Submission(){
    let colorInputField= document.querySelector('#set-color')
    colorInputField.addEventListener('click', changeColor)
    console.log(colorInputField)
    // second argument is always a function, calls changeColor() function
}

function changeColor(){
    event.preventDefault()
    let getInput = document.querySelector("#color-field").value
    let brush= document.querySelector('.brush')
    brush.style.background= getInput
    console.log(getInput)
}

setUpEventListeners()