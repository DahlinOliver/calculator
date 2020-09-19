let inputLabel = document.getElementById('inputLabel');
let division = document.getElementById('division');
let multiply = document.getElementById('multiply');

function pushBtn(obj) {

    let pushed = obj.innerHTML;

    if (pushed == '=') {
        //Calculate
        inputLabel.innerHTML = eval(inputLabel.innerHTML);

    } else if (pushed == 'AC') {
        // Clear calculator
        inputLabel.innerHTML = '0';

    } else if (pushed == 'DEL') {
        // Deletes latest event
        inputLabel.innerHTML = inputLabel.innerHTML.slice(0, -1);

        if (inputLabel.innerHTML.length < 1) {
            inputLabel.innerHTML = '0';
        }

    } else if (pushed == division.innerHTML) {
        // Adds correct division sign to inputLabel
        inputLabel.innerHTML = inputLabel.innerHTML + '/';

    } else if (pushed == multiply.innerHTML) {
        // Adds correct multiply sign to inputLabel
        inputLabel.innerHTML = inputLabel.innerHTML + '*';

    } else if (pushed == '%') {
        // Divides number to percent
        inputLabel.innerHTML = inputLabel.innerHTML / 100;

    } else {
        if (inputLabel.innerHTML == '0') {
            inputLabel.innerHTML = pushed;
        } else {
            inputLabel.innerHTML += pushed;
        }
    }
}
