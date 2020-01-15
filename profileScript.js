function assignval(){
    var testuid=document.getElementById("username");
    var testfname=document.getElementById("firstname");
    var testlname=document.getElementById("lastname");
    var testpass=document.getElementById("password");
    var testaddr=document.getElementById("address");
    // var testpic=document.getElementById("uploadImage");
    var userImage = document.getElementById("uploadPreview");
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
    // testpic.value=test2.pic;
    userImage.src = test2.pic;
    testgen.value=test2.gender;

    // var userImg= test2.pic;
    
    // console.log(userImg);
    // document.getElementById("profileDp").src="userImg";
    // setprofilePic();

}

function sessionClear()
{
sessionStorage.clear();
window.location="./login.html";
}


function EditUserData(){

    var UserName = document.getElementById("username").value;
    var FirstName = document.getElementById("firstname").value;
    var LastName = document.getElementById("lastname").value;
    var Password = document.getElementById("password").value;
    var Address = document.getElementById("address").value;
    var Pic = document.getElementById("uploadPreview").src;
    var Gender = document.querySelector('input[name=gen]:checked').value;
    // var Gender = document.getElementById("gen").value;
      
    // if(UserName !== "" && FirstName!== "" && LastName!=="" && Password !== "" && Address !== "" && Pic !== "" && Gender !== "")
    // {
        var dataObj={"username":UserName,"firstname":FirstName,"lastname":LastName,"password":Password,"address":Address,"pic":Pic,"gender":Gender};
        // userArray.push(dataObj);
        var userRecord = JSON.stringify(dataObj);
        localStorage.setItem(dataObj.username,userRecord);
        window.location="./profile.html";
    // }
    // else{
    //     alert("All Fields are Required");
    // }
     }

// function setprofilePic(){
//     var userDp=localStorage.getItem("pic");
//     console.log(userDp);
//     document.getElementById("profileDp").src="userDp";
// }


    function preventBack() { window.history.forward(); }
setTimeout("preventBack()", 0);
window.onunload = function () { null };




function validatePass(Password){
    
    if( Password.length < 8)
    {
        document.getElementById("passError").innerHTML="Weak password - * Password should be atleast 9-15 charachers *";
        document.getElementById("passError").style.display="block";
        document.getElementById("passError").style.color="red";
        console.log("weak");
    }
    else
    {
        document.getElementById("passError").innerHTML="Strong Password";
        document.getElementById("passError").style.display="block";
        document.getElementById("passError").style.color="green";
        console.log("strong");
    }
}

function ValidatefName(firstname)
      { 
          
        if (!firstname.match(/^[a-zA-Z]+$/)) 
        {
            document.getElementById("fnameError").innerHTML="Only Alphabets are Allowed";
            document.getElementById("fnameError").style.display="block";
            document.getElementById("fnameError").style.color="red";
            return false;
        }
        else
        {
            document.getElementById("fnameError").innerHTML="Name Available";
            document.getElementById("fnameError").style.display="block";
            document.getElementById("fnameError").style.color="green";
            return true;    
        }    
            
      }

function ValidatelName(LastName)
{ 
           if (!LastName.match(/^[a-zA-Z]+$/)) 
        {
            document.getElementById("lnameError").innerHTML="Only Alphabets are Allowed";
            document.getElementById("lnameError").style.display="block";
            document.getElementById("lnameError").style.color="red";
            return false;
        }
        else
        {
            document.getElementById("lnameError").innerHTML="Name Available";
            document.getElementById("lnameError").style.display="block";
            document.getElementById("lnameError").style.color="green";
            return true;    
        }    
}
// function PreviewImage() {
//     var oFReader = new FileReader();
//     oFReader.readAsDataURL(document.getElementById("uploadPreview").files[0]);

//     oFReader.onload = function (oFREvent) {
//         document.getElementById("uploadImage").src = oFREvent.target.result;
//         var imagepath=oFREvent.target.result;
//         localStorage.setItem("imagepath",imagepath);
//     }
// }

// function reg(){
//         // var userArray=[];
         
//         var UserName = document.getElementById("username").value;
//         var FirstName = document.getElementById("firstname").value;
//         var LastName = document.getElementById("lastname").value;
//         var Password = document.getElementById("password").value;
//         var Address = document.getElementById("address").value;
//         var Pic = document.getElementById("uploadImage").value;
//         var Gender = document.querySelector('input[name=gen]:checked').value;
        
//         if(UserName !== "" && FirstName!== "" && LastName!=="" && Password !== "" && Address !== "" && Pic !== "" && Gender !== "")
//         {  

//             if(Password.length > 8)
//             {
//                 var dataObj={"username":UserName,"firstname":FirstName,"lastname":LastName,"password":Password,"address":Address,"pic":Pic,"gender":Gender};
//                 var userRecord = JSON.stringify(dataObj);
//                 localStorage.setItem(dataObj.username,userRecord);
//                 window.location ="./login.html";
//             }
//             else
//             {
//               document.getElementById("passError").innerHTML="Weak password - * Password should be atleast 9-15 charachers *";
//               document.getElementById("passError").style.display="block";
//               document.getElementById("passError").style.color="red";
//               console.log("weak");
//             }
//         }
//         else{
//             document.getElementById("all-error-message").innerHTML="All Fields are Required ";
//             document.getElementById("all-error-message").style.color="red";
//         }
// }

 
