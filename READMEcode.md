# JavaScript

```javascript
const button = document.querySelector("#check-btn")
const userInput = document.querySelector("#text-input")
const result = document.querySelector("#result")

function checkIfPalindrome(inputValue) {
    const chars = ["\\", "[", "]", "{", "}", "(", ")", "/", " ", ".", "!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "=", "+", ";", ":", "'", "\"", ",", "<", ">", "?", "|"];
    const filteredUserInput = inputValue
        .split("")
        .filter((item) => !chars.includes(item))
        .join("")
    const reversedFilteredUserInput = filteredUserInput
        .split("")
        .reverse()
        .join("")
    return filteredUserInput.toLowerCase() === reversedFilteredUserInput.toLowerCase() ? true : false;

}

button.addEventListener("click", (e) => {
    e.preventDefault()
    
    if (userInput.value.length === 0) {
        alert("Please input a value")
    } else {
        result.innerText = checkIfPalindrome(userInput.value) ? `${userInput.value} is a palindrome` : `${userInput.value} is not a palindrome`
        userInput.value = ""
    }
})

```
