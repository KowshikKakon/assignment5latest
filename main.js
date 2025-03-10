// Task List

document.getElementById("my_index").addEventListener("click",function(e){

    window.location.href="./answer.html";




    

})

function goBack() {
    window.location.href = "./index.html"; // Change this to your actual home page URL
}

const tasks = [
    { id: "com1", taskName: "Fix Mobile Button Issue" },
    { id: "com2", taskName: "Add Dark Mode" },
    { id: "com3", taskName: "Optimize Home Page" },
    { id: "com4", taskName: "Add new emoji 🤲" },
    { id: "com5", taskName: "Integrate OpenAI API" },
    { id: "com6", taskName: "Improve Job Searching" }
];

// Common function to handle task completion
function completeTask(taskId, taskName) {
    let res1 = document.getElementById("five");
    let res3 = parseInt(res1.innerText);

    let res4 = document.getElementById("big");
    let res6 = parseInt(res4.innerText);

    const button = document.getElementById(taskId);
    button.disabled = true;

    if (res3 && res6) {
        res1.innerText = --res3;
        res4.innerText = ++res6;

        alert("Board updated successfully");
        if (res3 === 0) {
            alert("Congratulations! You have completed all the current tasks.");
        }

        let now = new Date();
        let currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

        const transactionContainer = document.getElementById("transac_container");
        const div = document.createElement("div");
        div.innerHTML = `<h1>You have completed the task: ${taskName} at ${currentTime}</h1>`;
        transactionContainer.appendChild(div);
    }
}


tasks.forEach(task=>{
document.getElementById(task.id).addEventListener("click",function(){
    completeTask(task.id,task.taskName);
})
});



// Attach event listeners dynamically
// tasks.forEach(task => {
//     document.getElementById(task.id).addEventListener("click", function () {
//         completeTask(task.id, task.taskName);
//     });
// });

// Clear transaction history
document.getElementById("clear").addEventListener("click", function () {
    document.getElementById("transac_container").innerHTML = "";
});

// Random background color change
document.getElementById("divID").addEventListener("click", function () {
    document.body.style.backgroundColor = `rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, 1)`;
});

function randomColor() {
    return Math.floor(Math.random() * 256);
}

// Display current date
document.getElementById("my_jul").innerHTML = new Date().toDateString();
