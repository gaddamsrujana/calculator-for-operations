let buttons = document.getElementsByTagName("button");
let result = document.getElementById("result")
for (i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        let input = this.innerText;
        updateDisplay(input)
    }
}
function updateDisplay(input) {
    let currentdisplay = result.innerText
    // if we type something that will be displayed on result field
    if (currentdisplay == "0") {
        if (input != "C" && input != "DEL" && input != "=") {
            result.innerText = " "
            result.innerText = input
        }
    }
    else {
        // if we enter DEL then last right side text will be deleted
        if (input == "DEL") {
            result.innerText = currentdisplay.substring(0, currentdisplay.length - 1)
            if (result.innerText == "") {
                result.innerText = "0"
            }
        }
        // if we enter C then result field will be empty that is 0
        if (input == "C") {
            result.innerText = "0"
        }
        // if we enter ant text then that text will be concatinated with its previous text
        if (input != "C" && input != "DEL" && input != "=") {
            result.innerText += input
        }
        // square operation on given text
        if (input == "x^2") {
            result.innerText = currentdisplay * currentdisplay
        }
        //    result or output of given text
        if (input == "=") {
            let display = result.innerText
            result.innerText = eval(display)
        }

    }
}