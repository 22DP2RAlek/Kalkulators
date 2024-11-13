document.addEventListener("DOMContentLoaded", function () {
    const answerBox = document.forms['form1'].answer;
    const historyButton = document.getElementById('history');
    const historyModal = document.getElementById('history-modal');
    const closeHistoryButton = document.getElementById('close-history');
    const historyList = document.getElementById('history-list');

    let calculationHistory = []; // Array to store history

    // Handle number and operator button clicks
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            answerBox.value += this.getAttribute('data-value');
        });
    });

    // Handle equals button click to evaluate the expression
    document.getElementById('equals').addEventListener('click', function () {
        let expression = answerBox.value.trim();

        if (expression === "") {
            answerBox.value = "Error: Empty Input";
            return;
        }

        try {
            let result = eval(expression);  // Evaluate the expression
            answerBox.value = result;

            // Save this calculation to history
            calculationHistory.push(`${expression} = ${result}`);
        } catch (error) {
            answerBox.value = "Error: Invalid Expression";
        }
    });

    // Handle the Clear All button click to reset the input box
    document.getElementById('clear').addEventListener('click', function () {
        answerBox.value = '';  // Clear the answer box
    });

    // Show the history modal when the "History" button is clicked
    historyButton.addEventListener('click', function () {
        // Clear the existing list
        historyList.innerHTML = '';

        // Add each calculation to the history list
        calculationHistory.forEach((item) => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            historyList.appendChild(listItem);
        });

        // Show the modal
        historyModal.style.display = 'block';
    });

    // Close the history modal when the "Close" button is clicked
    closeHistoryButton.addEventListener('click', function () {
        historyModal.style.display = 'none';
    });

    // Close the modal if the user clicks anywhere outside of it
    window.addEventListener('click', function (event) {
        if (event.target === historyModal) {
            historyModal.style.display = 'none';
        }
    });
});
