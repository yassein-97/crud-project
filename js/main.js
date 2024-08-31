const inputTask = document.getElementById("my-input");
var myRow = document.getElementById("my-table");
var addBtn = document.getElementById("add-btn");
// 0  1 2 4
var myArr;
var globalIndex = 0;
if (localStorage.getItem("tasks")) {
  myArr = JSON.parse(localStorage.getItem("tasks"));
  dispalData();
} else {
  myArr = [];
}

// console.log(myRow);
// console.log(inputTask);

function addTask() {
  // console.log(inputTask.value);
  if (addBtn.innerHTML == "update") {
    editTask();
  } else {
    myArr.push(inputTask.value);
    localStorage.setItem("tasks", JSON.stringify(myArr));
    console.log(myArr);
    dispalData();
    clearInput();
  }
}

function dispalData() {
  var box = "";
  for (let i = 0; i < myArr.length; i++) {
    box += `
         <tr>
                                    <td>${myArr[i]}</td>
                                    <td><button class="btn btn-danger" onclick="deleteTask(${i})"> <i class="fa-solid fa-trash-can"></i> Delete</button></td>
                                    <td><button class="btn btn-warning" onclick="setUpForEdit(${i})"> <i class="fa-solid fa-pen-to-square"></i> Edit</button></td>
                                </tr>
    `;
    console.log(myArr[i]);
  }

  myRow.innerHTML = box;
}

function clearInput() {
  inputTask.value = "";
}

function deleteTask(index) {
  console.log("hello");
  myArr.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(myArr));
  dispalData();
}

function setUpForEdit(index) {
  globalIndex = index;
  inputTask.value = myArr[index];
  addBtn.innerHTML = "update";
  addBtn.classList.replace("btn-dark", "btn-warning");
}

function editTask() {
  console.log("test");
  
  myArr.splice(globalIndex, 1, inputTask.value);
  localStorage.setItem("tasks", JSON.stringify(myArr));
  dispalData();
  clearInput();
  addBtn.innerHTML = "Add";
  addBtn.classList.replace("btn-warning", "btn-dark");
}
