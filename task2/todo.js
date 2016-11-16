//add new task to the local storage
function setTaskToLocalStorage(name, author, status) {
    status = status === undefined ? false : status;

    var json = getTasksFromLocalStorage();

    if (json == null) {
        json = [];
    }

    json.push({
        name: name,
        author : author,
        status : status
    });

    localStorage.setItem('tasks', JSON.stringify(json));
}

//get all tasks from the local storage
function getTasksFromLocalStorage() {
    return JSON.parse(localStorage.getItem('tasks'));
}

//remove all tasks from the local storage
function removeLocalStorage() {
    localStorage.removeItem("tasks");
}