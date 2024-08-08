let previousNumber = ""
let nextNumber = ""
let operation = ""

function appendNumber(number) {
    if(previousNumber.includes(".") && number == ".") return
    previousNumber += number
    console.log(previousNumber);
}

const $numberButtons = document.querySelectorAll("[data-number]")
$numberButtons.forEach(button => button.addEventListener("click", () => {
    appendNumber(button,dataset.number)
}))