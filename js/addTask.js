// ________________________GLOBAL DECLARATION________________________

let startDate = false;
let dueDate = false;


function getData(){
  return JSON.parse(localStorage.getItem(sessionStorage.getItem('uname')));
}

function setData(data){
  localStorage.setItem(sessionStorage.getItem('uname'), JSON.stringify(data));
}

function setSession(setSessionData1,setSessionData2 )
{
    sessionStorage.setItem(setSessionData1,setSessionData2);
}

function clearSession()
{
    sessionStorage.clear();
}



// ________________________LOGOUT FUNCTION________________________

function LogOut()
{
clearSession();
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

    var dataObj = getData();
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
        setSession('test','successfull');
       
        // check();
        setData(dataObj);
        // localStorage.setItem(sessionStorage.getItem("uname"), JSON.stringify(dataObj)); 
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


function addTodoTask(){
  window.location ="./addTask.html";
}


function disablePreviousStartDates() {
  let dateInput = document.getElementById("todoStartDate");
  const cur_date = new Date();
  const cur_month = cur_date.getMonth() > 9 ? cur_date.getMonth() + 1 : '0' + (cur_date.getMonth() + 1);
  const cur_day = cur_date.getDate() > 9 ? cur_date.getDate() : '0' + cur_date.getDate();
  const dateStr = cur_date.getFullYear() + '-' + cur_month + '-' + cur_day;
  dateInput.setAttribute('min', dateStr);
  }
  function disablePreviousDueDates() {
    let dateInput = document.getElementById("todoDueDate");
    const cur_date = new Date();
    const cur_month = cur_date.getMonth() > 9 ? cur_date.getMonth() + 1 : '0' + (cur_date.getMonth() + 1);
    const cur_day = cur_date.getDate() > 9 ? cur_date.getDate() : '0' + cur_date.getDate();
    const dateStr = cur_date.getFullYear() + '-' + cur_month + '-' + cur_day;
    dateInput.setAttribute('min', dateStr);
    }