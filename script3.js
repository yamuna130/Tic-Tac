const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleClick(event) {
    const cell = event.target;
    const index = cell.dataset.index;

    if (cell.textContent === '') {
        cell.textContent = currentPlayer;
        if (checkWin()) {
            alert(`${currentPlayer} wins!`);
            resetBoard();
        } else if (isBoardFull()) {
            alert('It\'s a draw!');
            resetBoard();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].textContent === currentPlayer;
        });
    });
}

function isBoardFull() {
    return [...cells].every(cell => cell.textContent !== '');
}

function resetBoard() {
    cells.forEach(cell => {
        cell.textContent = '';
    });
    currentPlayer = 'X';
}

cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});
