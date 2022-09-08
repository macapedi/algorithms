// ================== morseCode ======================

// Question: 
// The Morse code encodes every character as a sequence of "dots" and "dashes". 
//  For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. 
// The Morse code is case-insensitive, traditionally capital letters are used. 
// When the message is written in Morse code, a single space is used to separate 
// the character codes and 3 spaces are used to separate words. 
// Using the dictionary provided, write a function to decode Morse code string. 
// Decode the following: '.... . -.--   .--- ..- -.. .'

// Morse Code Dictionary:


// 

const morseCode = {
    '-.-.--': '!',
    '.-..-.': '"',
    '...-..-': '$',
    '.-...': '&',
    '.----.': '\'',
    '-.--.': '(',
    '-.--.-': ')',
    '.-.-.': '+',
    '--..--': ',',
    '-....-': '-',
    '.-.-.-': '.',
    '-..-.': '/',
    '-----': '0',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '---...': ':',
    '-.-.-.': ';',
    '-...-': '=',
    '..--..': '?',
    '.--.-.': '@',
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '..--.-': '_'
}
const code = ".... . -.--   .--- ..- -.. .";

const decodeMorse = (code) => {
 
    let lettersTranslated = [];
    let wordsTranslated = [];
    let answer = [];

    const codeWords = code.split("   ");

    codeWords.forEach(word => {
        const codeLetters = word.split(' ');

        codeLetters.forEach(letter => {
            lettersTranslated.push(morseCode[letter]);
        })
        lettersTranslated.push(" ");
    });
    wordsTranslated.push(lettersTranslated.join(""));

    answer = wordsTranslated.join("");
    return answer
}

console.log(decodeMorse(code));