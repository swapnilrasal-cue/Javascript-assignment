var Edit = (function () {

var startDate = false;
var dueDate= false;

function getData(){
  return JSON.parse(localStorage.getItem(sessionStorage.getItem('uname')));
}

function setData(data){
  localStorage.setItem(sessionStorage.getItem('uname'), JSON.stringify(data));
}

function getSession()
{
  return sessionStorage.getItem("index");
}

function test(tes){
  return ''+tes.getFullYear()+'-'+(tes.getMonth()+1)+'-'+tes.getDate()
}


return{

  // ____________________________VALIDATE Dates_____________________________
 
  startDateValidation:function(){
 
    var startdate = document.getElementById("StartDate").value;
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
      
  },
 
  DueDateValidation:function(){
    let startdate = document.getElementById("StartDate").value;
    let duedate = document.getElementById("DueDate").value;
    if (startdate > duedate) {
      alert("Due Date is not valid");
      dueDate = false;
    }
    else {
      dueDate = true;
    }
  },


// ____________________________________EDIT TODO _________________________________________

editTodoTask:function() {
    var dataObj = getData(); 
    // JSON.parse(localStorage.getItem(sessionStorage.getItem("uname")));
    var todolist = dataObj.todotask; 
    var Index = getSession();
    // sessionStorage.getItem("index");
    let editData = todolist[Index];
    let  todoName= editData.todoName;
    let todoCategory = editData.todoCategory;
    let todoStartDate = editData.todoStartDate;
    let todoDueDate = editData.todoDueDate;
    document.getElementById("Name").value = todoName;
    document.getElementById("StartDate").value = todoStartDate;
    document.getElementById("DueDate").value = todoDueDate;
    document.getElementById("Category").value = todoCategory;
 },

// _____________________________SAVE CHANGES AFTER EDIT ____________________________________

saveChanges:function() {
    var dataObj = getData();
    // JSON.parse(localStorage.getItem(sessionStorage.getItem("uname")));
    var todolist = dataObj.todotask; 
    var Index = getSession();
    // sessionStorage.getItem("index");
    let editData = todolist[Index];
    editData.todoName = document.getElementById("Name").value;
    editData.todoStartDate = document.getElementById("StartDate").value;
    editData.todoDueDate = document.getElementById("DueDate").value;
    editData.todoCategory = document.getElementById("Category").value;
    // startDateValidation();
    // DueDateValidation();

    if(editData.todoName != "" && editData.todoStartDate != "" && editData.todoDueDate != "" && editData.todoCategory != "")
    {
      if(startDate == true && dueDate == true)
      { 
        setData(dataObj);
        window.location="./todo.html";
    }
      else{
        alert("invalid date");
      }      
    }
    else
    {
      alert("Fill all details");
    }
  },
 
   disablePreviousStartDates:function() {
    let dateInput = document.getElementById("StartDate");
    const cur_date = new Date();
    const cur_month = cur_date.getMonth() > 9 ? cur_date.getMonth() + 1 : '0' + (cur_date.getMonth() + 1);
    const cur_day = cur_date.getDate() > 9 ? cur_date.getDate() : '0' + cur_date.getDate();
    const dateStr = cur_date.getFullYear() + '-' + cur_month + '-' + cur_day;
    dateInput.setAttribute('min', dateStr);
    },

    disablePreviousDueDates:function() {
      let dateInput = document.getElementById("DueDate");
      const cur_date = new Date();
      const cur_month = cur_date.getMonth() > 9 ? cur_date.getMonth() + 1 : '0' + (cur_date.getMonth() + 1);
      const cur_day = cur_date.getDate() > 9 ? cur_date.getDate() : '0' + cur_date.getDate();
      const dateStr = cur_date.getFullYear() + '-' + cur_month + '-' + cur_day;
      dateInput.setAttribute('min', dateStr);
      }

    };

    }) ();