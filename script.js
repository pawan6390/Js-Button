// Variables to store the count and theme
let count = 0;
let isDarkMode = false;

// DOM elements
const countDisplay = document.getElementById('count');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');
const resetBtn = document.getElementById('reset-btn');
const toggleThemeBtn = document.getElementById('toggle-theme-btn');

// Function to update the display
function updateDisplay() {
    countDisplay.textContent = count;
}

// Event listeners for buttons
increaseBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decreaseBtn.addEventListener('click', () => {
    count--;
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});

toggleThemeBtn.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
});
