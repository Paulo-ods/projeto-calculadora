let previousNumber = ""
let nextNumber = ""
let operation = ""

function appendNumber(number) {
    if(previousNumber.includes(".") && number == ".") return
    previousNumber += number
    console.log(previousNumber);

    updateScreen()
}

function updateScreen(){
    if (operation == ""){
        $screenDisplay.innerHTML = previousNumber
    } else {
        $screenDisplay.innerHTML = `${previousNumber} ${operation}`
    }
}

function chooseOperation(operator) {
    operation = operator

    updateScreen()
}

const $numberButtons = document.querySelectorAll("[data-number]")
$numberButtons.forEach(button => button.addEventListener("click", () => 
    appendNumber(button.dataset.number)
))

const $screenDisplay = document.querySelector(".screen-display")

const $operatorButtons = document.querySelectorAll("[data-operator]")
$operatorButtons.forEach(button => button.addEventListener("click", () => 
    chooseOperation(button.dataset.operator)
))