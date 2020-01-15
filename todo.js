function addTask()
{
    var TodoName=document.getElementById("todoName").value;
    var TodoCategory=document.getElementById("todoCategory").value;
    var StartDate=document.getElementById("todoStartDate").value;
    var DueDate=document.getElementById("todoDueDate").value;
    var Note=document.getElementById("todoNote").value;
    var IsPublic=document.getElementById("todoIsPublic").value;
 
    var taskObj={ 
            "todoName":TodoName,
            "todoCategory":TodoCategory,
            "todoStartDate":StartDate,
            "todoDueDate":DueDate,
            "todoNote":Note,
            "todoIsPublic": IsPublic
    }
    console.log(taskObj);
    console.log(taskObj.todoDueDate);
    console.log(taskObj.IsPublic);
    var taskRecord=JSON.stringify(taskObj);
    console.log(taskRecord);
}