const result = (str) => {
    const countOfCharacters = {};
    for (let i = 0; i < str.length; i++) {
        const single_Character = str[i];
        if (single_Character in countOfCharacters) {
            countOfCharacters[single_Character]++;
        } else {
            countOfCharacters[single_Character] = 1;
        }
    }
    return countOfCharacters;
}

const str = "Hello, world!";
console.log(result(str));
