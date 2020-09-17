let oneBtn = document.getElementById('calc-one');
let twoBtn = document.getElementById('calc-two');
let threeBtn = document.getElementById('calc-three');
let fourBtn = document.getElementById('calc-four');
let fiveBtn = document.getElementById('calc-five');
let sixBtn = document.getElementById('calc-six');
let sevenBtn = document.getElementById('calc-seven');
let eightBtn = document.getElementById('calc-eight');
let nineBtn = document.getElementById('calc-nine');
let zeroBtn = document.getElementById('calc-zero');

let commaBtn = document.getElementById('calc-comma');
let clearBtn = document.getElementById('calc-clear');
let backspaceBtn = document.getElementById('calc-backspace');
let displayValElement = document.getElementsByClassName('calc-display');

let displayVal = '0';
let pendingVal;
let evalStringArray = [];

let calcTopBtn = document.getElementsByClassName('calc-btn-top');
let calcNumBtn = document.getElementsByClassName('calc-btn-num');
let calcOperatorBtn = document.getElementsByClassName('calc-btn-operator');

let updateDisplay = (clickObj) => {
    let btnText = clickObj.target.innerText;

    if (displayVal === '0')
        displayVal = '';

    displayVal += btnText;
    displayValElement.innerText = displayVal;
}

for (let i = 0; i < calcNumBtn.length; i++) {
    calcNumBtn[i].addEventListener('click', updateDisplay, false)
}

/* for (let i = 0; i < calcOperatorBtn.length; i++) {
    calcOperatorBtn[i].addEventListener('click', updateDisplay, false)
}
 */
