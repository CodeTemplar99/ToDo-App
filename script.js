// create task
document.querySelector(".create-task").addEventListener("click", newTask)
function newTask() {
    var see = document.querySelector(".enter-new-task-con");
    see.style.display = "block";
}
// add task now
document.querySelector(".add-now-button").addEventListener("click", addTaskNow)

function addTaskNow() {
    for (var i = 0; i < 1; i++) {

        var task_see = document.createElement(`span`);
        task_see.className = "written";
        task_see.innerText = document.querySelector("#task-fill").value;
        var checker_text_con = document.createElement(`div`);
        var checker = document.createElement(`input`);
        checker.setAttribute("type", "checkbox")
        checker.className = "mr-3"

        var del = document.createElement(`i`);
        del.className = "fa fa-times "

        if (task_see === '') {
            alert("you cannot leave input empty");
        }
        else {
            var li = document.createElement(`li`);
            li.className = "list-group-item";
            checker_text_con.append(checker, task_see);
            li.append(checker_text_con, del);

            document.querySelector(".list-group").appendChild(li);
            var see = document.querySelector(".enter-new-task-con");
            see.style.display = "none";
        }
        // check task

        var cross = checker.addEventListener("click", function () {

            // // check
            function checkThisTask() {
                if (checker.checked == true) {
                    var CheckedText = task_see;
                    CheckedText.className = "checked";
                }
                else {
                    console.log("not checked");
                }
            }

            checkThisTask()

        });

        (function () {
            console.log("del initiated");

            function removeTask() {
                var remove = del.addEventListener("click", function () { run(remove) })
                function run(remove) {
                    for (i = 0; i < 1; i++) {
                        console.log("del 2 initiated")
                        li = document.querySelector(".list-group-item")
                        document.querySelector(".list-group").removeChild(li);
                        document.querySelector(".deactivated").appendChild(li);
                    }
                }
            }

            removeTask();
        })();


    }
}
