const string = "Twitter Blue has it all, be it editing tweets, posting longer videos, or flaunting your verification badge! But it still fails to solve the one trivial issue, which is advertisements.";

const letterCount = {};

for (let i = 0; i < string.length; i++) {
    const letter = string[i].toLowerCase();
    if (letter.match(/[a-z]/i)) {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    }
}

let mostCommonLetter = "";
let mostCommonCount = 0;
let mostCommonLetters = [];
let leastCommonLetter = "";
let leastCommonCount = Infinity;
let leastCommonLetters = [];

const result = {
    letterCount: [],
    mostCommon: "",
    leastCommon: "",
};

for (const letter in letterCount) {
    const count = letterCount[letter];
    result.letterCount.push(`${letter}: ${count}`);
    if (count > mostCommonCount) {
        mostCommonCount = count;
        mostCommonLetter = letter;
        mostCommonLetters = [letter];
    } else if (count === mostCommonCount) {
        mostCommonLetters.push(letter);
    }
    if (count < leastCommonCount) {
        leastCommonCount = count;
        leastCommonLetter = letter;
        leastCommonLetters = [letter];
    } else if (count === leastCommonCount) {
        leastCommonLetters.push(letter);
    }
}

result.mostCommon = `${mostCommonLetters.join(", ")}: ${mostCommonCount}`;
result.leastCommon = `${leastCommonLetters.join(", ")}: ${leastCommonCount}`;

console.log(result);
