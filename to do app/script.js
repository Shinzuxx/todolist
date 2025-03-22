function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskInput.value;

    li.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    taskList.appendChild(li);
    taskInput.value = "";
}
