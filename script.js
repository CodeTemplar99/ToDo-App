
// creat task
document.querySelector(".create-task").addEventListener("click", newTask)

function newTask() {
    var see = document.querySelector(".enter-new-task-con");
    see.style.display = "block";
}

// add task now
document.querySelector(".add-now-button").addEventListener("click", addTaskNow)

function addTaskNow() {
    for (var i = 0; i < 1; i++) {

        var inputValue = document.querySelector("#task-fill").value;

        var checker_text_con = document.createElement(`div`);
        var checker = document.createElement(`input`);
        checker.setAttribute("type", "checkbox")
        checker.className = "mr-3"

        var del = document.createElement(`i`);
        del.className = "fa fa-times "
        var task_text = document.createTextNode(inputValue);

        if (inputValue === '') {
            alert("you cannot leave input empty");
        }
        else {
            var li = document.createElement(`li`);
            li.className = "list-group-item";
            checker_text_con.append(checker, task_text);
            li.append(checker_text_con, del);

            function removeTask(i, j) {
                i.addEventListener("click", run)
            }


            document.querySelector(".list-group").appendChild(li);
            var see = document.querySelector(".enter-new-task-con");
            see.style.display = "none";
        }
    }

    var zero = document.querySelectorAll(".fa-times");
    zero.forEach(removeTask);

}

function run() {
    for (i = 0; i < 1; i++) {
        li = document.querySelector(".list-group-item")
        document.querySelector(".list-group").removeChild(li);
    }
}
