// ________________________GLOBAL DECLARATION________________________

var dataObj = JSON.parse(localStorage.getItem(sessionStorage.getItem("uname")));
var todolist = dataObj.todotask; 
var todoselect = document.getElementById("todoTable");
var checkBoxes = todoselect.getElementsByTagName('input');
var startDate = false;
var dueDate = false;
var UserInputFlag = false; 
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

//  // ___________________________POP UP ADD TASK_____________________________

// function activateAddUser()
// {
//     document.getElementById("add-todo-tasks").style.display="block";
// }

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
        list.innerHTML += "<td>" + '<button type="button" style="display:block" name="" id="btn' + i + '" onclick=" editTodo(' + i + ');">Edit</button>' + "</td>";
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
    for (var t = todolist.length - 1; t >= 0; t--) {    
        if (checkBoxes[t].checked == true) {
        todoTable.deleteRow(t + 1);
        todolist.splice(t, 1);
      }
    }
    // dataObj.todotask = todolist;
    // alert("Deleted");
    localStorage.setItem(sessionStorage.getItem("uname"),  JSON.stringify(dataObj));
  }

 // ____________________________CHANGE STATUS DONE_____________________________________

  function statusDone() {
    for (var t = todolist.length - 1; t >= 0; t--) {
      if (checkBoxes[t].checked == true) 
      {  
        todolist[t].status = 'Done';
        localStorage.setItem(sessionStorage.getItem("uname"),  JSON.stringify(dataObj));
      }

    }
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
          // alert("found");
          document.getElementById("noRecordFound").style.display="none";
          document.getElementById("todoTableBox").style.display="block";

        }
        else if (search == "All") {
          tr[i].style.display = "";
          // alert("found");
          document.getElementById("noRecordFound").style.display="none";
          document.getElementById("todoTableBox").style.display="block";
        }
        else {
          document.getElementById("noRecordFound").style.display="block";
          document.getElementById("todoTableBox").style.display="none";
          tr[i].style.display = "none";
          // alert("Not found");
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
            document.getElementById("noRecordFound").style.display="none";
            document.getElementById("todoTableBox").style.display="block";
            found = false;
        } else {
          document.getElementById("todoTableBox").style.display="none";
          document.getElementById("noRecordFound").style.display="block";
            tr[i].style.display = "none";
        }
    }
  }

// ____________________________________EDIT TODO _________________________________________

  function editTodo(i) {
    console.log(i);
    var index=i;
    sessionStorage.setItem("index",index);
    window.location="./editTask.html";

  }


// ___________________________________SUCCESS MESSAGE __________________________________

function check()
{
  let p = sessionStorage.getItem('test')
  if(p == 5){
      console.log("Signup Sucessful");
      document.getElementById("success").style.display="block";      
  }
  else
  {
      console.log("Signup Sucessful");
      document.getElementById("failure").style.display="block";
  }
}


function addTodoTask(){
  window.location ="./addTask.html";
}

function checkIsEmpty()
{
  if(todolist == "")
  {
    alert("No Todo Record");
    document.getElementById("noRecord").style.display="block";
  }
  else
  {
    // alert("Record Found");
    document.getElementById("todoTableBox").style.display="block";
  }
}

function clearFilter()
{
  window.location.reload();
}

function setSerachFlag()
{
 var x = document.getElementById("searchInput").value;

 if( x == "")
 {
  UserInputFlag = false;
 }
else{
  UserInputFlag = true;
  emptySearch();
}

}

function emptySearch(){
  if(UserInputFlag == false)
  {
    //  document.getElementById("SearchBtn1").disabled="true";
    console.log("Empty Search Box");
    document.getElementById("SearchBtn1").style.display="none";
    document.getElementById("SearchBtn2").style.display="inline-block";
  }   
  else
  {    
    document.getElementById("SearchBtn1").style.display="inline-block";
    document.getElementById("SearchBtn2").style.display="none";


  }
}
// ------------------------------------------

function checkSelected()
{
  if(checkBoxes.checked == true)
  {
    document.getElementById("doneBtn2").style.display="none";
    document.getElementById("doneBtn1").style.display="inline-block";
  }
  else
  {
    document.getElementById("doneBtn1").style.display="none";
    document.getElementById("doneBtn2").style.display="inline-block";
  }
}

