const numBtn = document.querySelectorAll(".num");
const operationBtn = document.querySelectorAll(".operation");
const del = document.querySelector('.del');
const clear = document.querySelector('.clear');
const btn = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const dec = document.querySelector('.dec');

let currentNum = null;
let lastNum = null;
let evalOnNext = false;
let nextOperation = null;

function performOperation() {
    if (currentNum) {
        operation(this.textContent);
    }
}

function operation(operationClick) {
    switch(nextOperation) {
        case '+':
            lastNum = add(lastNum, currentNum);
            evalOnNext = true;
            break;
        case '-':
            lastNum = diff(lastNum, currentNum);
            evalOnNext = true;
            break;
        case 'X':
            lastNum = mult(lastNum, currentNum);
            evalOnNext = true;
            break;
        case '/':
            if(currentNum === '0') {
                lastNum = null;
                currentNum = null;
                lastNum = 'No No No!';
            } else {
            lastNum = div(lastNum, currentNum);
            evalOnNext = true;
            };
            break;
        case '=':
            evalOnNext = false;
            lastNum = currentNum;
            break;
        default:
            lastNum = currentNum;
    };

    lastNum = String(lastNum);

    if(lastNum.length > 11) {
        lastNum = roundNum(lastNum);
    }
    screen.textContent = lastNum
    currentNum = null;
    nextOperation = operationClick;
};

function roundNum(numString) {
    const lastDigit = numString.charAt(11);
    let secondLastDigit = numString.charAt(10);

    if(Number(lastDigit >= 5)) {
        secondLastDigit = Number(secondLastDigit);
        secondLastDigit = secondLastDigit + 1;
    };
    const subStr = numString.slice(0,10);
    const newNum = subStr + String(secondLastDigit);
    return newNum;
};

function setCurrent() { 
    if(currentNum && currentNum.length <= 11){
        currentNum = currentNum + this.textContent;
    } else if (!currentNum) {
        currentNum = this.textContent;
    }
    
        screen.textContent = currentNum;
};

function writeDecimal() {
    if(!currentNum) {
        currentNum = '0.';
    } else if(!currentNum.includes('.')) {
        currentNum = currentNum + this.textContent;
    }
    };

function add(a,b) {
    a = Number(a);
    b = Number(b);
    const sum = a + b;
    return sum;
};

function diff(a,b) {
    a = Number(a);
    b = Number(b);
    const diff = a - b;
    return diff;
};

function mult(a,b) {
    a = Number(a);
    b = Number(b);
    const prod = a * b;
    return prod;
};

function div(a,b) {

    a =  Number(a);
    b =  Number(b);
    const quot = a / b;
    return quot;
};

function clearScreen() {
    currentNum = null;
    lastNum = null;
    nextOperation = null;
    updateScreen();
}
function updateScreen() {
        screen.textContent = currentNum;
};

function backspace () {
    currentNum = currentNum.slice(0,-1);
    updateScreen();
}

dec.addEventListener('click', writeDecimal);
operationBtn.forEach(item => item.addEventListener('click', performOperation));
clear.addEventListener('click', clearScreen);
del.addEventListener('click',backspace);
numBtn.forEach(item => item.addEventListener('click', setCurrent));
//numBtn.forEach(item => item.addEventListener('click', () => screen.textContent = currentNum));