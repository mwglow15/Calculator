const numBtn = document.querySelectorAll(".num");
const addition = document.querySelector(".add")
const del = document.querySelector('.back');
let currentNum = null;
let lastNum = null;
let evalOnNext = false;
let nextOperation = null;

function setCurrent() {
    if (currentNum) {
        lastNum = currentNum;
    }
    currentNum = this.textContent;
    console.log(currentNum);
};

addition.addEventListener('click', () => operation);
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
