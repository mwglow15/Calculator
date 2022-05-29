const numBtn = document.querySelectorAll(".num");
const del = document.querySelector('.back');
let currentNum = null;
let eval = false;

function setCurrent() {
    if (currentNum) {
        
    }
    currentNum = this.textContent;
    console.log(currentNum);
};

del.addEventListener('click', () => currentNum = 0);
numBtn.forEach(item => item.addEventListener('click', setCurrent));
console.log(numBtn);

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
