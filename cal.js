function display(num) {
    result.value += num
}

function clearScreen() {
    result.value =""
}


function calculate() {
    result.value =eval(result.value)
}

function back() {
    result.value =result.value.slice(0,-1)
}