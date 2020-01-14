function assignval(){
    var testuid=document.getElementById("user-name");
    var testfname=document.getElementById("first-name");
    var testlname=document.getElementById("last-name");
    var testpass=document.getElementById("pass");
    var testaddr=document.getElementById("addr");
    var testpic=document.getElementById("pic");
    var testgen=document.getElementById("gen");
    console.log(testuid);
    console.log(testfname);
    console.log(testlname);
    console.log(testpass);
    console.log(testaddr);
    var test2=JSON.parse(localStorage.getItem(sessionStorage.getItem("uname")));
    testuid.value=test2.username;
    testfname.value=test2.firstname;
    testlname.value=test2.lastname;
    testpass.value=test2.password;
    testaddr.value=test2.address;
    testpic.value=test2.pic;
    testgen.value=test2.gender;
}

function sessionClear()
{
sessionStorage.clear();
window.location="./login.html";
}


function EditUserData(){
    var UserName = document.getElementById("user-name").value;
    var FirstName = document.getElementById("first-name").value;
    var LastName = document.getElementById("last-name").value;
    var Password = document.getElementById("pass").value;
    var Address = document.getElementById("addr").value;
    var Pic = document.getElementById("pic").value; 
    var Gender = document.getElementById("gen").value;
      
    if(UserName !== "" && FirstName!== "" && LastName!=="" && Password !== "" && Address !== "" && Pic !== "" && Gender !== "")
    {
        var dataObj={"username":UserName,"firstname":FirstName,"lastname":LastName,"password":Password,"address":Address,"pic":Pic,"gender":Gender};
        // userArray.push(dataObj);
        var userRecord = JSON.stringify(dataObj);
        localStorage.setItem(dataObj.username,userRecord);
      
    }
    else{
        alert("All Fields are Required");
    }
    }

    function PreviewImg() {
        var oFReader = new FileReader();
        oFReader.readAsDataURL(document.getElementById("upload").files[0]);
    
        oFReader.onload = function (oFREvent) {
            document.getElementById("uploadPreview").src = oFREvent.target.result;
        }
    }
    

    function preventBack() { window.history.forward(); }
setTimeout("preventBack()", 0);
window.onunload = function () { null };