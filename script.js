// use sanitized character set
const inputChars = "CDGHJLMPQRTVWXYZ23456789";
const maxIndex = (inputChars.length - 1);


// access document elements
let generateBtn = document.querySelector("#generate");
let codeText = document.querySelector("#code");


// generates code from character set
function generateCode() {

    let newCode = "";

    // make code 8 characters long
    let n = 0;
    while (n < 8) {

        // get random integer for index
        let index = Math.floor(Math.random() * maxIndex);

        // append character at index to code
        newCode += inputChars[index];
        n++;
    }

    return newCode;
}


function writeCode() {
    let newCode = generateCode();
    console.log(newCode);
    codeText.value = newCode;
}

// generate and write code on button click
generateBtn.addEventListener("click", writeCode);
