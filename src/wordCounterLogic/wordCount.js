/*
WELCOME TO WORD COUNT FUNCTION
This program is used to count the number of words in a text.

This program also has multiple functions
One function is to count the number of words in a text by grabbing a users 
input from the text area in html and then will seperate the string by the whitespaces nd will arrange them in an array
this will then display the contents of the array.

The Second function is to open a form when the login button is clicked by changing the display of the signup page
to block and then will change the position of the form to absolute and will place it under the sign up button.

Other functions are not ready to be declared.
*/




function countWords(text) {
    if (typeof text !== `string`) { //Basic validation to check if the input is a string
        return `Please provide a valid string`;

    }

    const words = text.trim().split(/\s+/g); // This will take the text and it will trim (remove any whitespace or new line) and then split the text into an array of words
    console.log(`Words Array:`, words);
    return words.length;

}

function openForm() {
    var form = document.getElementById("signupPage");
    var button = document.querySelector(".login-Button");
    if (form.style.display === "none") {
        //This Line of code is calling for the signup buttons exact location
        //and making it a variable decarled as rect
        var rect = button.getBoundingClientRect();

        form.style.display = "block";
        form.style.position = "absolute"; //This will tell the form to be placed at a speciific position closest to its ancestor
        form.style.top = rect.bottom + "px";
        form.style.left = (rect.left - 100) + "px";
        form.style.display ="block";

    } else {
        form.style.display = "none";
    }
}

function home() {
    console.log("You are already on home");
}

function about() {
    console.log("There is no about page yet");
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