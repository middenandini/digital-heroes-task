const textInput = document.getElementById('text-input');
const wordCount = document.getElementById('word-count');
const charCount = document.getElementById('char-count');
const clearBtn = document.getElementById('clear-btn');

textInput.addEventListener('input', () => {
    const text = textInput.value;
    
    // Character Count
    charCount.textContent = text.length;
    
    // Word Count
    const words = text.trim().split(/\s+/);
    wordCount.textContent = text.trim() === '' ? 0 : words.length;
});

clearBtn.addEventListener('click', () => {
    textInput.value = '';
    wordCount.textContent = '0';
    charCount.textContent = '0';
});