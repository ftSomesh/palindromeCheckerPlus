const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

const checkForPalindrome = input => {
    const originalInput = input;

    if (input === '') {
        alert('Please input a value');
        return;
    }

    // Remove the previous children
    resultDiv.replaceChildren();

    const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    let resultMsg = `${originalInput} ${lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
        } a palindrome.`;

    // Append child (resultMsg)
    const pTag = document.createElement('p');
    pTag.className = 'user-input';
    pTag.innerText = resultMsg;
    resultDiv.appendChild(pTag);
};

checkPalindromeBtn.addEventListener('click', () => {
    checkForPalindrome(userInput.value);
    userInput.value = '';
});

// A scenario where user may want to get the result by presseing enter key.
userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        checkForPalindrome(userInput.value);
        userInput.value = '';
    }
});

