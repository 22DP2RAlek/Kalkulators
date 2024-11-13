const screen = document.getElementById('calc-screen');
const buttons = document.querySelectorAll('.calc-button');

let inp1 = "";
let inp2 = "";
let currentOperator = null;

const historyList = document.getElementById('history-list');
let history = JSON.parse(localStorage.getItem('history')) || [];

function updateHistory() {
    historyList.innerHTML = "";
    history.forEach((entry, index) => {
        const li = document.createElement('li');
        li.classList.add('history-item');
        li.textContent = entry;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.classList.add('delete-history');
        deleteButton.addEventListener('click', () => deleteHistory(index));

        li.appendChild(deleteButton);
        historyList.appendChild(li);
    });
}

updateHistory();

function deleteHistory(index) {
    history.splice(index, 1);
    localStorage.setItem('history', JSON.stringify(history));
    updateHistory();
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;
        if (buttonValue === "AC") {
            screen.value = "0";   
            inp1 = "";            
            inp2 = "";            
            currentOperator = null;
        }

        else if (buttonValue === "+" || buttonValue === "-" || buttonValue === "x" || buttonValue === "/") {
            inp1 = screen.value;           
            currentOperator = buttonValue; 
            screen.value = "";           
        }
        else if (buttonValue === "=") {
            inp2 = screen.value;          
            let result;

            if (currentOperator === '+') {
                result = parseFloat(inp1) + parseFloat(inp2);
            } else if (currentOperator === '-') {
                result = parseFloat(inp1) - parseFloat(inp2);
            } else if (currentOperator === '/') {
                result = parseFloat(inp1) / parseFloat(inp2);
            } else if (currentOperator === 'x') {
                result = parseFloat(inp1) * parseFloat(inp2);
            }

            screen.value = result;
            const historyEntry = `${inp1} ${currentOperator} ${inp2} = ${result}`;
            history.push(historyEntry);

            localStorage.setItem('history', JSON.stringify(history));
            updateHistory();

            inp1 = result;  
            inp2 = "";
            currentOperator = null;
        }
     
        else {
            if (screen.value === "0") {
                screen.value = buttonValue;
            } else {
                screen.value += buttonValue;
            }
        }
    });
});
