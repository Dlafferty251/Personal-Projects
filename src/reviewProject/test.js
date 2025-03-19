const reviewers = [
    {
        id: 0,
        name: "Brad Pitt",
        job: "Actor",
        icon: "images/BradPitt.jpg",
        text: "Brad Pitt, born William Bradley Pitt on December 18, 1963, is an American actor.",
    },
    {
        id: 1,
        name: "Patrick Star",
        job: "Stay At Home Starfish",
        icon: "images/patrickStar.jpg",
        text: "Patrick is SpongeBob's best friend, living under a rock.",
    },
    {
        id: 2,
        name: "Dylan Lafferty",
        job: "Line Cook",
        icon: "images/profileIcon.png",
        text: "Dylan is a line cook at McGlynn's bar, mastering Jambalaya.",
    }
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentReviewer = 0;

// Display person details based on currentReviewer index
function showPerson(personIndex) {
    const item = reviewers[personIndex];
    img.src = item.icon;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// Initial loading of the first reviewer
window.addEventListener('DOMContentLoaded', () => {
    showPerson(currentReviewer);
});

// Create a new reviewer with image upload
randomBtn.addEventListener('click', () => {
    const name = prompt("Enter your Name:");
    const jobTitle = prompt("Enter your Job Title:");
    const bio = prompt("Enter your Bio:");

    if (!name || !jobTitle || !bio) {
        alert("All fields are required.");
        return;
    }

    const uploadBtn = document.createElement('button');
    uploadBtn.textContent = "Upload Image";
    document.body.appendChild(uploadBtn);

    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';

    uploadBtn.addEventListener('click', () => {
        fileInput.click();
    });

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
                uploadBtn.remove();
            };
            reader.readAsDataURL(file);
        }
    });
});

// Navigate to the next reviewer
nextBtn.addEventListener('click', () => {
    if (currentReviewer < reviewers.length - 1) {
        currentReviewer++;
        showPerson(currentReviewer);
    }
});

// Navigate to the previous reviewer
prevBtn.addEventListener('click', () => {
    if (currentReviewer > 0) {
        currentReviewer--;
        showPerson(currentReviewer);
    }
});
