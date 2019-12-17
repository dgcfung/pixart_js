
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

function appendSquares(){
    let addSquares= document.querySelector('body')
    
    for (i=0; i<20; i++){
        let item= document.createElement('div')
        item.className= 'square'
        console.log(item)
        // item = document.querySelector('.square')
        addSquares.appendChild(item)
        // console.log(item)
    }
    
}


setUpEventListeners()
appendSquares()



