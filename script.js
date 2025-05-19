// use sanitized character set
const inputChars = "CDGHJLMPQRTVWXYZ23456789";
const maxIndex = (inputChars.length - 1);


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


function main() {
    let newCode = generateCode();
    console.log(newCode);
}


main();
