let completedTasks = 0;

function increaseProgress() {

    if (completedTasks < 5) {

        completedTasks++;

        document.getElementById("completed").innerHTML = completedTasks;

        let percentage = (completedTasks / 5) * 100;

        document.getElementById("progress-bar").style.width =
        percentage + "%";

    } else {

        alert("You have completed all the tasks!");

    }

}