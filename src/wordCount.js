/*
WELCOME TO WORD COUNT FUNCTION
This program is used to count the number of words in a text.

*/




function countWords(text) {
    if (typeof text !== `string`) { //Basic validation to check if the input is a string
        return `Please provide a valid string`;

    }

    const words = text.trim().split(/\s+/); // This will take the text and it will trim (remove any whitespace or new line) and then split the text into an array of words
    console.log(`Words Array:`, words);
    return words.length;

}

document.addEventListener('DOMContentLoaded', function() {

    //Gets the Inputs from the HTML File
    const textArea = document.getElementById('text');
    const countButton = document.getElementById('countButton');
    const wordCountDisplay = document.getElementById('wordCount');

    //Add function that gets feedback when the button is clicked
    countButton.addEventListener('click', function() {
        //Tells function to get the value from text area
        const text = textArea.value;

        //counts the words in the text
        const wordCount = countWords(text);

        wordCountDisplay.textContent = `Word Count: ${wordCount}`;
    });
});