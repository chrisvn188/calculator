// get UI elements
const resultArea = document.querySelector('#result-area');
const powerBtn = document.querySelector('#power-btn');
const clearBtn = document.querySelector('#clear-btn');
const eraserBtn = document.querySelector('#eraser-btn');
const numberBtns = document.querySelectorAll(`button[data-number]`);
const operatorBtns = document.querySelectorAll(`button[data-operator]`);

function appendNumber(){
    numberBtns.forEach(btn => btn.addEventListener('click', e => {
        if(+resultArea.textContent === 0){
            resultArea.textContent = e.target.getAttribute('data-number');
        }else{
            resultArea.textContent += e.target.getAttribute('data-number');
        }
        
    }));
}

clearBtn.addEventListener('click', () => {
    resultArea.textContent = "0";
});

appendNumber();

