const btn = document.querySelector('.btn');
const textarea = document.getElementById('password');
const icon = document.querySelector('.text-container img');
const copiedTextEl = document.querySelector('.clipboard-text');
let clicked = false;

btn.addEventListener('click', () => {
    textarea.value = generatePassword(12);
});

icon.addEventListener('click', () => {
    copiedTextEl.style.opacity = '100%';
    navigator.clipboard.writeText(textarea.value);
    if (!clicked) {
        setTimeout(disableEl, 3000);
        clicked = true;
    }
});

function generatePassword (length) {
    const characters = [
        'abcdefghijklmnopqrstuvwxyz',
        '0123456789',
        '!?$%&/\\()[]{}#*_'
    ];
    let password = '';

    for (let i = 0; i < length; i++) {
        const upperCase = randomNumber(2);
        const randomOne = randomNumber(3);
        const randomTwo = randomNumber(characters[randomOne].length);
        if (upperCase === 0) {
            password += characters[randomOne][randomTwo];
        } else {
            password += characters[randomOne][randomTwo].toUpperCase();
        }
    }

    return password;
}

function randomNumber (limit) {
    const randomNum = Math.floor(Math.random() * limit);
    return randomNum;
}

function disableEl () {
    textarea.value = 'Create Password';
    copiedTextEl.style.opacity = '0%';
    clicked = false;
}