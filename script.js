
// document.querySelector(".see").addEventListener("click", sortTable);
// function sortTable() {
//     for (var i = 0; i < countryInfo.length; i += 1) {
//         var row = document.querySelector("tbody").insertRow()
//         row.innerHTML = "<td>" + countryInfo[i].Country + "</td>"
//             + "<td>" + countryInfo[i].Capital + "</td>"
//             + "<td>" + countryInfo[i].Continent + "</td>"
//             + "<td>" + countryInfo[i].Currency + "</td>"
//             + "<td>" + countryInfo[i].President + "</td>"
//             + "<td>" + countryInfo[i].Population + "</td>"
//         console.log(countryInfo[i].Country)
//     }

// }


// creat task
document.querySelector(".create-task").addEventListener("click", newTask)

function newTask() {
    var see = document.querySelector(".enter-new-task-con");
    see.style.display = "block";
}

// add task now
document.querySelector(".add-now-button").addEventListener("click", addTaskNow)


// function newElement() {
//     var li = document.createElement("li");
//     var inputValue = document.getElementById("myInput").value;
//     var t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     if (inputValue === '') {
//         alert("You must write something!");
//     } else {
//         document.getElementById("myUL").appendChild(li);
//     }

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
        }

        document.querySelector(".list-group").appendChild(li);
        var see = document.querySelector(".enter-new-task-con");
        see.style.display = "none";
    }
}

