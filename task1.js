const string = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.";
const words = string.split(/[ ,]+/).filter(Boolean);

const wordFrequency = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
}, {});

console.log(wordFrequency);

const totalWords = words.length;

const wordFrequencyPercentage = {};
for (const [word, frequency] of Object.entries(wordFrequency)) {
    const percentage = (frequency / totalWords) * 100;
    wordFrequencyPercentage[word] = parseFloat(percentage.toFixed(2));
}

console.log(wordFrequencyPercentage);