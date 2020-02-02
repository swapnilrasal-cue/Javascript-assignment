// ________________________GLOBAL DECLARATION________________________

var dataObj = JSON.parse(localStorage.getItem(sessionStorage.getItem("uname")));
var todolist = dataObj.todotask; 
var todoselect = document.getElementById("todoTable");
// var checkBoxes = todoselect.getElementsByTagName('input');
var startDate = false;
var dueDate = false;
// ________________________LOGOUT FUNCTION________________________

function LogOut()
{
sessionStorage.clear();
window.location="./login.html";
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
    // if(dataObj.todotask === undefined || dataObj.todotask === null){
    //     dataObj.todotask = [];
    // }

    if(TodoName != "" && StartDate != "" && DueDate != "" && TodoCategory != "")
    {
      if(startDate == true && dueDate == true)
      {
        console.log(TodoName);
        dataObj.todotask.push(taskObj);
        sessionStorage.setItem('test',5);
        // check();
        localStorage.setItem(sessionStorage.getItem("uname"), JSON.stringify(dataObj)); 
        window.location="./todo.html";
        // document.getElementById("form").reset();   
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
      startdate = test(new Date(startdate));
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


// ____________________________________EDIT TODO _________________________________________

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

// _____________________________SAVE CHANGES AFTER EDIT ____________________________________

  function saveChanges() {
    let editData = todolist[e];
    editData.todoName = document.getElementById("todoName").value;
    editData.todoStartDate = document.getElementById("todoStartDate").value;
    editData.todoDueDate = document.getElementById("todoDueDate").value;
    editData.todoCategory = document.getElementById("todoCategory").value;
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

// function check()
// {
//   let p = sessionStorage.getItem('test')
//   if(p == 5){
//       console.log("Signup Sucessful");
//       document.getElementById("success").style.display="block";      
//   }
//   else
//   {
//       console.log("Signup Sucessful");
//       document.getElementById("failure").style.display="block";
//   }
// }


function addTodoTask(){
  window.location ="./addTask.html";
}
