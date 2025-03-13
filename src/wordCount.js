function countWords(text) {
    if (typeof text !== `string`) {
        return `Please provide a valid string`;

    }

    const words = text.trim().split(/\s+/);
    console.log(`Words Array:`, words);
    return words.length;

}

const text = `Hello, World My name is dylan`;
console.log(`You entered: ${text}`);
console.log(`Total words: ${countWords(text)}`);