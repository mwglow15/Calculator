const numBtn = document.querySelectorAll(".num");
const operationBtn = document.querySelectorAll(".operation");
const del = document.querySelector('.back');
const btn = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');

let currentNum = null;
let lastNum = null;
let evalOnNext = false;
let nextOperation = null;

function operation() {
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
                lastNum = div(lastNum, currentNum);
                evalOnNext = true;
                break;
            case '=':
                evalOnNext = false;
                lastNum = currentNum;
                break;
            default:
                lastNum = currentNum;
        };

    screen.textContent = lastNum
    currentNum = null;
    nextOperation = this.textContent;
    console.log(lastNum);
    console.log(currentNum);
};

function setCurrent() {
    if (currentNum ) {
        currentNum = currentNum + this.textContent;
    } else if (!currentNum && this.textContent === '.') {
        currentNum = '0.';
    } else {
        currentNum = this.textContent;
    }

    screen.textContent = currentNum;
};

function add(a,b) {
    a = ~~a;
    b = ~~b;
    const sum = a + b;
    return sum;
};

function diff(a,b) {
    a = ~~a;
    b = ~~b;
    const diff = a - b;
    return diff;
};

function mult(a,b) {
    a = ~~a;
    b = ~~b;
    const prod = a * b;
    return prod;
};

function div(a,b) {
    a = ~~a;
    b = ~~b;
    const quot = a / b;
    return quot;
};

function updateScreen() {
        screen.textContent = currentNum;
};

operationBtn.forEach(item => item.addEventListener('click', operation));
del.addEventListener('click', () => currentNum = 0);
numBtn.forEach(item => item.addEventListener('click', setCurrent));
numBtn.forEach(item => item.addEventListener('click', () => screen.textContent = currentNum));