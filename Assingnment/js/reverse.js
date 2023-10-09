function reverseWords(sentence) {
    return sentence.split(' ').map(word => {
        return word.split('').reverse().join('');
    }).join(' ');
}

const prompt = require("prompt-sync")({sigint:true});
const inputSentence = prompt("Enter a sentence:");
const reversedSentence = reverseWords(inputSentence);

console.log("Reversed Sentence:", reversedSentence);
