// ________________________GLOBAL DECLARATION________________________

var dataObj = JSON.parse(localStorage.getItem(sessionStorage.getItem("uname")));
var todolist = dataObj.todotask; 
var todoselect = document.getElementById("todoTable");
var checkBoxes = todoselect.getElementsByTagName('input');
var startDate = false;
var dueDate = false;
// ________________________LOGOUT FUNCTION________________________

function LogOut()
{
sessionStorage.clear();
window.location="./login.html";
}

// ________________________DISPLAY ONLOAD FUNCTION________________________

(function(){
DisplayData();
})();

 // ___________________________POP UP ADD TASK_____________________________

function activateAddUser()
{
    document.getElementById("add-todo-tasks").style.display="block";
}


 // ____________________________ADD NEW RECORD_____________________________

var TaskArr=[];
function addTask()
{
    var TodoName = document.getElementById("todoName").value;
    var TodoCategory = document.getElementById("todoCategory").value;
    var StartDate = document.getElementById("todoStartDate").value;
    var DueDate = document.getElementById("todoDueDate").value;
 
    var taskObj={
            "todoName":TodoName,
            "todoCategory":TodoCategory,
            "todoStartDate":StartDate,
            "todoDueDate":DueDate,
            "status" : "Pending", 
    }

    var dataObj = JSON.parse(localStorage.getItem(sessionStorage.getItem("uname")));
    taskObj.todoid = dataObj.todoId;
    dataObj.todoId++;
    if(dataObj.todotask === undefined || dataObj.todotask === null){
        dataObj.todotask = [];
    }

    if(TodoName != "" && StartDate != "" && DueDate != "" && TodoCategory != "")
    {
      if(startDate == true && dueDate == true)
      {
        console.log(todoName);
        dataObj.todotask.push(taskObj);
        sessionStorage.setItem('test',5);
        check();
        localStorage.setItem(sessionStorage.getItem("uname"), JSON.stringify(dataObj)); 
        DisplayData();
        document.getElementById("form").reset();
        
        // sessionStorage.removeItem('test');
      }
      else{
        alert("invalid date");
      }      
    }
    else
    {
      alert("Fill all details");
    }

}

 // ____________________________DISPLAY RECORDS_____________________________

 function DisplayData()
 {
    var dataObj = JSON.parse(localStorage.getItem(sessionStorage.getItem("uname")));
    let todolist = dataObj.todotask; 
    console.log(todolist);

    let table = document.getElementById("todoTableBody");
    table.innerHTML = "";
    
    for (let i = 0; i < todolist.length; i++) {

      let list = document.createElement("tr");
      list.innerHTML = "<td>" + "<input name='selectedItem' type='checkbox' value='yes' id='" + todolist[i].todoid + "' </td>" +
        "<td>" + todolist[i].todoName + "</td>" +
        "<td>" + todolist[i].todoCategory + "</td>" +
        "<td>" + todolist[i].todoStartDate + "</td>" +
        "<td>" + todolist[i].todoDueDate + "</td>" +
        "<td>" + todolist[i].status + "</td>" ;
         if (todolist[i].status == "Done") {
         list.innerHTML += "<td>" + '<button type="button" style="display:block" name="" id="btn' + i + '" onclick="deleteTodo(' + i + ');">Delete</button>' + "</td>"; 
         }
     else {
        list.innerHTML += "<td>" + '<button type="button" style="display:block" name="" id="btn' + i + '" onclick="activateAddUser(); editTodo(' + i + '); disableDone(' + i + ');">Edit</button>' + "</td>";
        
     }
      table.appendChild(list);

    }
 }

// ____________________________VALIDATE Dates_____________________________

function test(tes){
   return ''+tes.getFullYear()+'-'+(tes.getMonth()+1)+'-'+tes.getDate()
}

function startDateValidation(){

    var startdate = document.getElementById("todoStartDate").value;
    startdate = test(new Date(startdate));
    console.log(startdate);
    var currentdate = test(new Date());
    
    if (startdate >= currentdate) 
  {
    // alert('Given date is greater than the current date.');
    startDate = true;
  }
    else
    {
      alert('Given date is smaller than the current date.');
      startDate = false;
    }
      
  }
 
function DueDateValidation(){
    let startdate = document.getElementById("todoStartDate").value;
    let duedate = document.getElementById("todoDueDate").value;
    if (startdate > duedate) {
      alert("Due Date is not valid");
      dueDate = false;
    }
    else {
      dueDate = true;
    }
  }

 // _______________________DELETE MULTIPLE SELECTED TASk___________________________

 function deleteCheckedTodo() {

    var checkBoxes = todoselect.getElementsByTagName('input');
    
    // for(let a = 0; a < checkBoxes.length; a++){
    //     if(checkBoxes[a].checked != true){
    //         checkBoxes.splice(a,1);
    //     }
    // }
    // var dataObj = JSON.parse(localStorage.getItem(sessionStorage.getItem("uname")));
    // for(let c = 0; c < checkBoxes.length; c++){
        // var t = data.todo.length - 1; t >= 0; t--
        // for(let p = dataObj.todotask.length - 1; p >= 0 ; p--)
        //    if(dataObj.todotask[p].checked==true){    
        //         todoTable.deleteRow(p + 1);
        //         dataObj.todotask.splice(p,1);
         //    }
    // }
    // fetch checked checkboxes
    // for loop 
    // document.getElementById("todoName").value = "";
    // document.getElementById("todoStartDate").value = "";
    // document.getElementById("todoDueDate").value = "";

    // var dataObj = JSON.parse(localStorage.getItem(sessionStorage.getItem("uname")));
    // var todolist = dataObj.todotask; 
    
    // for(var t = 0; t < checkBoxes.length; t++){
    //     if(checkBoxes[t].checked == true)
    //         dataObj.todotask.splice(checkBoxes[t].id,1)
    // }

    for (var t = todolist.length - 1; t >= 0; t--) {    
   
        if (checkBoxes[t].checked == true) {
        todoTable.deleteRow(t + 1);
        todolist.splice(t, 1);
      }
    }
    // dataObj.todotask = todolist;
    // alert("Deleted ToDo");
    localStorage.setItem(sessionStorage.getItem("uname"),  JSON.stringify(dataObj));
  }

 // ____________________________CHANGE STATUS DONE_____________________________________

  function statusDone() {
    for (var t = todolist.length - 1; t >= 0; t--) {
      if (checkBoxes[t].checked == true) {
        todolist[t].status = 'Done';
        localStorage.setItem(sessionStorage.getItem("uname"),  JSON.stringify(dataObj));
      }
    }
    // clearList();
    DisplayData();
  }

  // ____________________________DELETE SINGLE RECORD __________________________________

  function deleteTodo(i) {
    todoTable.deleteRow(i + 1);
    todolist.splice(i, 1);
    localStorage.setItem(sessionStorage.getItem("uname"),  JSON.stringify(dataObj));
    DisplayData();
  }
  // ____________________________________FILTER _________________________________________
 
  function filter() {
    var search = document.getElementById("search").value;
    let table = document.getElementById("todoTable");
    let tr = todoTable.getElementsByTagName('tr');
    for (var i = 1; i < tr.length; i++) {
      let td = tr[i].getElementsByTagName('td')[2];
      if (td) {
        let text = td.innerHTML;
        if (text.match(search)) {
          tr[i].style.display = "";
        }
        else if (search == "All") {
          tr[i].style.display = "";
        }
        else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  // ____________________________________SEARCH _________________________________________
 
  function searchTable() {
    var input, filter, found, table, tr, td, i, j;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("todoTable");
    tr = todoTable.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found = true;
            }
        }
        if (found) {
            tr[i].style.display = "";
            found = false;
        } else {
            tr[i].style.display = "none";
        }
    }
  }

  // let name = document.getElementById("todoName").value;
  // let date = document.getElementById("todoStartDate").value;
  // let date1 = document.getElementById("todoDueDate").value;

  function editTodo(i) {
    let editData = todolist[i];
    let  todoName= editData.todoName;
    let todoCategory = editData.todoCategory;
    let todoStartDate = editData.todoStartDate;
    let todoDueDate = editData.todoDueDate;
    
  
    document.getElementById("todoName").value = todoName;
    document.getElementById("todoStartDate").value = todoStartDate;
    document.getElementById("todoDueDate").value = todoDueDate;
    document.getElementById("todoCategory").value = todoCategory;

    document.getElementById("Add").style.display = "none";
    document.getElementById("Save").style.display = "block";
    e = i;
  }

  function saveChanges() {
    let editData = todolist[e];
    editData.todoName = document.getElementById("todoName").value;
    editData.todoStartDate = document.getElementById("todoStartDate").value;
    editData.todoDueDate = document.getElementById("todoDueDate").value;
    editData.todoCategory = document.getElementById("todoCategory").value;
    // dateValidation();
    startDateValidation();
    DueDateValidation();

    if(editData.todoName != "" && editData.todoStartDate != "" && editData.todoDueDate != "" && editData.todoCategory != "")
    {
      if(startDate == true && dueDate == true)
      { 
        localStorage.setItem(sessionStorage.getItem("uname"),  JSON.stringify(dataObj));
        DisplayData();
        document.getElementById("form").reset();
      }
      else{
        alert("invalid date");
      }      
    }
    else
    {
      alert("Fill all details");
    }
  }

  // ___________________________________SUCCESS MESSAGE __________________________________

function check()
{
  let p = sessionStorage.getItem('test')
  if(p == 5){
     // document.getElementById("test").innerHTML = 'kasjckasjhckasjhck'
      console.log("Signup Sucessful");
      document.getElementById("success").style.display="block";
      
  }
  else
  {
      console.log("Signup Sucessful");
      document.getElementById("failure").style.display="block";
  }

}