const numBtn = document.querySelectorAll(".num");
const operationBtn = document.querySelectorAll(".operation");
const del = document.querySelector('.back');
let currentNum = null;
let lastNum = null;
let evalOnNext = false;
let nextOperation = null;

function operation() {
    nextOperation = this.textContent;

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


    nextOperation = this.textContent;
    console.log(lastNum);
    console.log(currentNum);
}
function setCurrent() {
    if (currentNum) {
        lastNum = currentNum;
    }
    currentNum = this.textContent;
    console.log(currentNum);
};

operationBtn.forEach(item => item.addEventListener('click', operation));
del.addEventListener('click', () => currentNum = 0);
numBtn.forEach(item => item.addEventListener('click', setCurrent));

function add(a,b) {
    const sum = a + b;
    return sum;
}

function diff(a,b) {
    const diff = a - b;
    return diff;
}

function mult(a,b) {
    const prod = a * b;
    return prod;
}

function div(a,b) {
    const quot = a / b;
    return quot;
}
