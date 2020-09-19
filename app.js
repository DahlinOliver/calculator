let input = document.getElementById('input');
let division = document.getElementById('division');
let multiply = document.getElementById('multiply');

function pushBtn(obj) {

    let pushed = obj.innerHTML;

    if (pushed == '=') {
        //Calculate
        input.innerHTML = eval(input.innerHTML);

    } else if (pushed == 'AC') {
        // Clear calculator
        input.innerHTML = '0';

    } else if (pushed == 'DEL') {
        // Deletes latest event
        input.innerHTML = input.innerHTML.slice(0, -1);

        if (input.innerHTML.length < 1) {
            input.innerHTML = '0';
        }

    } else if (pushed == division.innerHTML) {
        // Adds correct division sign to input
        input.innerHTML = input.innerHTML + '/';

    } else if (pushed == multiply.innerHTML) {
        // Adds correct multiply sign to input
        input.innerHTML = input.innerHTML + '*';

    } else if (pushed == '%') {
        // Divides number to percent
        input.innerHTML = input.innerHTML / 100;

    } else {
        if (input.innerHTML == '0') {
            input.innerHTML = pushed;
        } else {
            input.innerHTML += pushed;
        }
    }
}
