const numBtn = document.querySelectorAll(".num");
let currentNum = 0;

function setCurrent() {
    currentNum = this.textContent;
    console.log(currentNum);
};

numBtn.forEach(item => item.addEventListener('click', setCurrent));
console.log(numBtn);
