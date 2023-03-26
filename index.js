const password = document.querySelector('.password');
const copy = document.getElementById('copy');
const length = document.getElementById('length');
const number = document.getElementById('number');
const upper = document.getElementById('upper');
const lower = document.getElementById('lower');
const symbol = document.getElementById('symbol');
const generate = document.getElementById('generate');
const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '1234567890';
const symbols = '!@#$%^&*()_+=-/?,><\~';

function getUpper(){
    return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}
function getLower(){
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}
function getNumbers(){
    return numbers[Math.floor(Math.random() * numbers.length)]
}
function getSymbols(){
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePassword(){
    const len = length.value
    let word = '';
    for(i = 0; i < len; i++){
        const key = generateKey()
        word += key
    }
    password.innerHTML = word;
}

function generateKey(){
    const keys = []
    if(number.checked){
        keys.push(getNumbers())
    }
    if(upper.checked){
        keys.push(getUpper())
    }
    if(lower.checked){
        keys.push(getLower())
    }
    if(symbol.checked){
        keys.push(getSymbols())
    }
    if(keys.length == 0){
        return ''
    }
    return keys[Math.floor(Math.random() * keys.length)]
}

generate.addEventListener("click", generatePassword);
copy.addEventListener("click", () => {
const textarea = document.createElement("textarea");
const word = password.innerText;
if (!word) {
return;
}
textarea.value = word;
document.body.appendChild(textarea);
textarea.select();
document.execCommand("copy");
textarea.remove();
alert("password copied to clipboard");
});