const reviewers = [
    {
    id: 0,
    name: "Brad Pitt",
    job: "Actor",
    icon: "images/BradPitt.jpg",
    text: "Brad Pitt, born William Bradley Pitt on December 18, 1963, is an American actor known for his versatile roles, including those in Thelma & Louise, A River Runs Through It, and Fight Club",

    }, 
     {
    id: 1,
    name: "Patrick Star",
    job: "Stay At Home Starfish",
    icon: "images/patrickStar.jpg",
    text: "Patrick starfish is a starfish that lives under a rock. He is Sponegebobs best friend.",
    },
     {
    id: 2,
    name: "Dylan Lafferty",
    job: "Line Cook",
    icon: "images/profileIcon.png",
    text: "Dylan is a line cook at Mcglynns bar and pub. He has cooked there for 5 years and has perfected his Jambalaya. He works a lot of hours and has spent a long time trying to master his knife skills."

}
];

//Grabs the items from the html file and declares them ass a constant
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentReviewer = 0;

// load items
window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentReviewer);


});

// Shows person based on the reviewer Number

function showPerson(person) {
    const item = reviewers[currentReviewer];
    img.src = item.icon;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.bio || item.text;
}

randomBtn.addEventListener("click", function () {
    alert("Prompt should appear");
    const name = prompt("Enter your Name: ");
    const jobTitle = prompt("Enter you job title");
    const bio = prompt("Enter your biography:");
    console.log("random button has been clicked.", reviewers);
    //Creates a file input element for an image upload
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    //Adds image into the image file
    fileInput.accept = 'image/*';

    fileInput.addEventListener('change', function() {
        const file = fileInput.files[0];

        //If there is a file then create a new element in array
        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {

                const newReviewer = {
                    name: name,
                    job: jobTitle,
                    icon: e.target.result, //Image Data URL
                    bio: bio
                };

                //Adds a new Reviewer into the array by pushing it into it
                //reminds me a git pushing my work... I also should commit now...
                reviewers.push(newReviewer);

                // Displays newReviewer
                currentReviewer = reviewers.length - 1;
                showPerson(currentReviewer);

                alert("Your Profile has been added! Yippie!");

            };
            reader.readAsDataURL(file);
        };
    });

    //Changes place in array by increasing the value of currentReviewer when next user is clicked

    nextBtn.addEventListener("click", function () {
        currentReviewer++;
        console.log(currentReviewer);
        showPerson(currentReviewer);
    });

    //Changes place in array by decreasing the value of currentReviewer
    prevBtn.addEventListener("click", function () {
        currentReviewer--;
        showPerson(currentReviewer);
    });
});