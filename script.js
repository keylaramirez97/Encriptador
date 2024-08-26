// Simple substitution cipher with a key
const key = "QWERTYUIOPASDFGHJKLZXCVBNM";

function encryptText() {
    let inputText = document.getElementById("inputText").value.toUpperCase();
    let encryptedText = '';

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];
        if (char.match(/[A-Z]/)) {
            let index = char.charCodeAt(0) - 65;
            encryptedText += key[index];
        } else {
            encryptedText += char; // Leave non-letters unchanged
        }
    }

    document.getElementById("outputText").value = encryptedText;
}

function decryptText() {
    let encryptedText = document.getElementById("outputText").value.toUpperCase();
    let decryptedText = '';

    for (let i = 0; i < encryptedText.length; i++) {
        let char = encryptedText[i];
        if (char.match(/[A-Z]/)) {
            let index = key.indexOf(char);
            decryptedText += String.fromCharCode(index + 65);
        } else {
            decryptedText += char; // Leave non-letters unchanged
        }
    }

    document.getElementById("outputText").value = decryptedText;
}
