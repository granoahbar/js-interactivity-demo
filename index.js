// Step 1: Grab an HTML element

const plusBtn = document.querySelector('#plus-btn')
const minusBtn = document.querySelector('#minus-btn')
const resetBtn = document.querySelector('#reset-btn')

// Step 2: Write the function

let count = 0

const increase = () => {
    count++
    console.log(count)
}

const decrease = () => {
    count--
    console.log(count)
}

const reset = () => {
    count = 0
    console.log(count)
}

// Step 3: Combines step 1 and 2 using an Event Listener

plusBtn.addEventListener('click', increase)
minusBtn.addEventListener('click', decrease)
resetBtn.addEventListener('click', reset)