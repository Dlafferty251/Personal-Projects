const reviewers = [
    {
        id: 1,
        name: "Brad Pitt",
        job: "Actor",
        icon: "images/BradPitt.jpg",
        text: "Brad Pitt, born William Bradley Pitt on December 18, 1963, is an American actor known for his versatile roles, including those in Thelma & Louise, A River Runs Through It, and Fight Club",
    }, 
    {
        id: 2,
        name: "Patrick Star",
        job: "Stay At Home Starfish",
        icon: "images/patrickStar.jpg",
        text: "Patrick starfish is a starfish that lives under a rock. He is SpongeBob's best friend.",
    },
    {
        id: 3,
        name: "Dylan Lafferty",
        job: "Line Cook",
        icon: "images/profileIcon.png",
        text: "Dylan is a line cook at Mcglynns bar and pub. He has cooked there for 5 years and has perfected his Jambalaya. He works a lot of hours and has spent a long time trying to master his knife skills.",
    },{

        id: 4,
        name: "Finny",
        job: "Being a good boy",
        icon: "images/finny.jpg",
        text: "Finn is a Bernese mountain dog. He is 3 years old and he loves to play, go on walks, and especially eating. He will do anything for a treat!"
    }
];

// Grabs the items from the HTML file and declares them as constants
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentReviewer = 0;

// Show person based on the reviewer number
function showPerson(person) {
    const item = reviewers[person];
    img.src = item.icon;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// Load items

window.addEventListener('DOMContentLoaded', () => {
    showPerson(currentReviewer);
});



// Handle Random Button Click
randomBtn.addEventListener('click', () => {
    const name = prompt("Enter your Name:");
    const jobTitle = prompt("Enter your Job Title:");
    const bio = prompt("Enter your Bio:");

    if (!name || !jobTitle || !bio) {
        alert("All fields are required.");
        return;
    }

    // Create a container for the buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container'); // Use the class defined in CSS

    // Create the upload button
    const uploadBtn = document.createElement('button');
    uploadBtn.textContent = "Upload Image";
    buttonContainer.appendChild(uploadBtn);

    // Create the file input element
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.style.display = 'none'; // Hide the input initially

    // Activate the file input when the upload button is clicked
    uploadBtn.addEventListener('click', () => {
        fileInput.click();
    });

    // Handle file selection and add the new reviewer
    fileInput.addEventListener('change', function() {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const newReviewer = {
                    name: name,
                    job: jobTitle,
                    icon: e.target.result, // Image Data URL
                    text: bio
                };
                reviewers.push(newReviewer);
                currentReviewer = reviewers.length - 1; // Show the new reviewer
                showPerson(currentReviewer);
                alert("Profile created successfully!");
                buttonContainer.remove(); // Remove the button container after upload
            };
            reader.readAsDataURL(file);
        }
    });

    // Append the button container next to the "Create User" button
    randomBtn.insertAdjacentElement('afterend', buttonContainer);
});

    // Next button functionality
    nextBtn.addEventListener("click", function () {
        if (currentReviewer < reviewers.length - 1) {
            currentReviewer++;
            showPerson(currentReviewer);
        }
    });

    // Previous button functionality
    prevBtn.addEventListener("click", function () {
        if (currentReviewer > 0) {
            currentReviewer--;
            showPerson(currentReviewer);
        }
    });


