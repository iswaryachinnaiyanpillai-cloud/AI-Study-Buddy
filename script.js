// Explore Now Button

document.getElementById("explore-btn").onclick = function(){

    document.getElementById("dashboard").style.display = "block";

    document.querySelector(".hero").style.display = "none";

};


// Feature Card Display

function showFeature(featureId){

    // Hide all features first

    let features = document.querySelectorAll(".feature");

    features.forEach(function(feature){
        feature.style.display = "none";
    });


    // Show selected feature

    document.getElementById(featureId).style.display = "block";

}
// Study Planner Function

function addTask(){

    let subject = document.getElementById("subject").value;

    let hours = document.getElementById("hours").value;


    if(subject === "" || hours === ""){
        alert("Please enter subject and study hours");
        return;
    }


    let li = document.createElement("li");

    li.innerHTML = subject + " - " + hours + " Hours";


    document.getElementById("task-list").appendChild(li);


    document.getElementById("subject").value="";
    document.getElementById("hours").value="";

}
// Quiz Function

function checkAnswer(){

    let answer = document.querySelector(
        'input[name="answer"]:checked'
    );


    if(answer == null){
        alert("Please select an answer");
        return;
    }


    if(answer.value === "correct"){
        document.getElementById("score").innerHTML =
        "Correct! 🎉 Your Score: 1/1";
    }
    else{
        document.getElementById("score").innerHTML =
        "Wrong Answer. Try Again!";
    }

}
// Notes Hub Function

function addNote(){

    let note = document.getElementById("note-input").value;


    if(note === ""){
        alert("Please write a note");
        return;
    }


    let li = document.createElement("li");

    li.innerHTML = note;


    document.getElementById("notes-list").appendChild(li);


    document.getElementById("note-input").value = "";

}
// Progress Pulse Function

let completedTasks = 0;

function increaseProgress(){

    if(completedTasks < 5){

        completedTasks++;

        document.getElementById("completed").innerHTML = completedTasks;

        let percentage = (completedTasks / 5) * 100;

        document.getElementById("progress-bar").style.width = percentage + "%";

    }

}
// Daily Spark Function

function newQuote(){

    let quotes = [
        "Believe in yourself and keep learning! 🌟",
        "Every expert was once a beginner. Keep going! 🚀",
        "Small progress every day creates big success! 💡",
        "Your future depends on what you learn today! 📚",
        "Consistency is the key to achieving your goals! 🔥"
    ];


    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];


    document.getElementById("quote").innerHTML = randomQuote;

}
// Dark Mode Function

let darkButton = document.getElementById("dark-btn");

if (darkButton) {
    darkButton.onclick = function() {
        document.body.classList.toggle("dark-mode");
    };
}