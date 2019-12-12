
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

    newTask()
}

// add task now
document.querySelector(".add-now-button").addEventListener("click", addTaskNow)

function addTaskNow() {
    var see = document.querySelector(".enter-new-task-con");
    see.style.display = "none";

    addTaskNow()
}
