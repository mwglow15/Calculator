const numBtn = document.querySelectorAll(".num");
const operationBtn = document.querySelectorAll(".operation");
const del = document.querySelector('.back');
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
        case '*':
            lastNum = mult(lastNum, currentNum);
            evalOnNext = true;
            break;
        case '/':
            lastNum = div(lastNum, currentNum);
            evalOnNext = true;
            break;
        case '=':
            evalOnNext = false;
    }

    currentNum = null;
    nextOperation = this.textContent;
    console.log(lastNum);
    console.log(currentNum);
}
function setCurrent() {
    if (currentNum) {
        lastNum = currentNum;
    }
    currentNum = this.textContent;
};

operationBtn.forEach(item => item.addEventListener('click', operation));
del.addEventListener('click', () => currentNum = 0);
numBtn.forEach(item => item.addEventListener('click', setCurrent));

function add(a,b) {
    a = ~~a;
    b = ~~b;
    const sum = a + b;
    return sum;
}

function diff(a,b) {
    a = ~~a;
    b = ~~b;
    const diff = a - b;
    return diff;
}

function mult(a,b) {
    a = ~~a;
    b = ~~b;
    const prod = a * b;
    return prod;
}

function div(a,b) {
    a = ~~a;
    b = ~~b;
    const quot = a / b;
    return quot;
}
