let previousNumber = ""
let nextNumber = ""
let operation = ""

function appendNumber(number) {
    if (operation == "") {
        if (previousNumber.includes(".") && number == ".") return
        previousNumber += number
        console.log(previousNumber);
    } else {
        if (nextNumber.includes(".") && number == ".") return
        nextNumber += number
    }
    updateScreen()
}

function updateScreen(){
    if (operation == ""){
        $screenDisplay.innerHTML = previousNumber
    } else {
        $screenDisplay.innerHTML = `${previousNumber} ${operation} ${nextNumber}`
    }
}

function chooseOperation(operator) {
    if (operation != "" && nextNumber != "") {
        calculate ()
    }

    operation = operator

    updateScreen()
}

function calculate(){
    previousNumber = Number(previousNumber)
    nextNumber = Number(nextNumber)

    switch (operation) {
        case "+":
            previousNumber += nextNumber
            break

        case "-":
            previousNumber -= nextNumber
            break

        case "X": 
            previousNumber *= nextNumber
            break

        case "÷":
            previousNumber /= nextNumber
            break

        default:
            break
    }

    operation = ""
    nextNumber = ""
}

function clearAll() {
    previousNumber = ""
    nextNumber = ""
    operation = ""
    $screenDisplay.innerHTML = "0"
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

const $equalButton = document.querySelector("[data-equal]")
$equalButton.addEventListener("click", () => {
    calculate()
    updateScreen()
})

const $clearAllButton = document.querySelector("[data-clear-all]")
$clearAllButton.addEventListener("click", () => clearAll())