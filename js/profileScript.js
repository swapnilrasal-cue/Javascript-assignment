var userPassFlag = true;
var userFnameFlag = true;
var userLnameFlag = true;
var userAddressFlag = true; 

// ___________________________________SUCCESS MESSAGE __________________________________

(function(){
    let p = sessionStorage.getItem('test')
    if(p == 5){
        console.log("profile edited Sucessful");
        document.getElementById("success").style.display="block";
        sessionStorage.removeItem('test')
    }
    else
    {
        console.log("edit profile failed");
        // document.getElementById("failure").style.display="block";
    }
})();

// _______________________ASSIGN VALUE TO PROFILE PAGE __________________________________


function assignval(){
    var testuid=document.getElementById("username");
    var testfname=document.getElementById("firstname");
    var testlname=document.getElementById("lastname");
    var testpass=document.getElementById("password");
    var testaddr=document.getElementById("address");
    // var testpic=document.getElementById("uploadImage");
    var userImage = document.getElementById("uploadPreview");
    var testgen=document.getElementById("gen");
    console.log(testaddr);
    var test2=JSON.parse(localStorage.getItem(sessionStorage.getItem("uname")));
    testuid.value=test2.username;
    testfname.value=test2.firstname;
    testlname.value=test2.lastname;
    testpass.value=test2.password;
    testaddr.value=test2.address;
    userImage.src = test2.pic;
    testgen.value=test2.gender;
}

// _______________________ASSIGN VALUE TO EDIT PROFILE PAGE ______________________________


function assignval2()
{
    var testuid=document.getElementById("username");
    var testfname=document.getElementById("firstname");
    var testlname=document.getElementById("lastname");
    var testpass=document.getElementById("password");
    var testaddr=document.getElementById("address");
    // var testpic=document.getElementById("uploadImage");
    var userImage = document.getElementById("uploadPreview");
    // var testgen=document.getElementById("gen");

    var test2=JSON.parse(localStorage.getItem(sessionStorage.getItem("uname")));
    console.log(test2.gender)

    testuid.value=test2.username;
    testfname.value=test2.firstname;
    testlname.value=test2.lastname;
    testpass.value=test2.password;
    testaddr.value=test2.address;
    userImage.src = test2.pic;
    // testgen.value=test2.gender;

    if(test2.gender == "Male"){
        document.getElementById("Male").checked = true
    }
    else if (test2.gender == "Female"){
        document.getElementById("Female").checked = true
    }
    else if(test2.gender == "Other"){
        document.getElementById("Other").checked = true
    }
 }

// __________________________________LOGOUT USER________________________________________

function sessionClear()
{
sessionStorage.clear();
window.location="./login.html";
}

// __________________________________EDIT USER PROFILE__________________________________

function EditUserData(){
    var test3=JSON.parse(localStorage.getItem(sessionStorage.getItem("uname")));
    var UserName = document.getElementById("username").value;
    var FirstName = document.getElementById("firstname").value;
    var LastName = document.getElementById("lastname").value;
    var Password = document.getElementById("password").value;
    var Address = document.getElementById("address").value;
    var Pic = document.getElementById("uploadPreview").src;
    var Gender = document.querySelector('input[name=gen]:checked').value;
        
        test3.username = document.getElementById("username").value;
        test3.firstname= document.getElementById("firstname").value;
        test3.lastname= document.getElementById("lastname").value;
        test3.password= document.getElementById("password").value;
        test3.address= document.getElementById("address").value;
        test3.pic= document.getElementById("uploadPreview").src;
        test3.gender= document.querySelector('input[name=gen]:checked').value;
        
        console.log(test3);
        var userRecord = JSON.stringify(test3);

        // console.log('userPassFlag',userPassFlag)
        // console.log('userFnameFlag',userFnameFlag)
        // console.log('userLnameFlag',userLnameFlag)
        if(userPassFlag && userFnameFlag && userLnameFlag && userAddressFlag)
        {
            localStorage.setItem(test3.username,userRecord);
            sessionStorage.setItem('test',5);
            window.location="./profile.html";
        }
        else
        {
            alert("You Must Fill In All Of The Fields Properly");
        }
        
     }


// function setprofilePic(){
//     var userDp=localStorage.getItem("pic");
//     console.log(userDp);
//     document.getElementById("profileDp").src="userDp";
// }

// __________________________________PREVENT BACK_______________________________________

function preventBack() { window.history.forward(); }
setTimeout("preventBack()", 0);
window.onunload = function () { null };

// // __________________________________VALIDATE PASSWORD__________________________________

// function validatePass(Password){
    
//     if( Password.length < 8)
//     {
//         document.getElementById("passError").innerHTML="Weak Password - * Password Should Be Atleast 9-15 Charachers *";
//         document.getElementById("passError").style.display="block";
//         document.getElementById("passError").style.color="red";
//         console.log("weak");
//     }
//     else
//     {
//         document.getElementById("passError").innerHTML="&#x2713";
//         document.getElementById("passError").style.display="block";
//         document.getElementById("passError").style.color="green";
//         console.log("strong");
//     }
// }

// // __________________________________VALIDATE FIRSTNAME__________________________________

// function ValidatefName(firstname)
//       {           
//         if (!firstname.match(/^[a-zA-Z]+$/)) 
//         {
//             document.getElementById("fnameError").innerHTML="Invalid FirstName";
//             document.getElementById("fnameError").style.display="block";
//             document.getElementById("fnameError").style.color="red";
//             return false;
//         }
//         else
//         {
//             document.getElementById("fnameError").innerHTML="&#x2713";
//             document.getElementById("fnameError").style.display="block";
//             document.getElementById("fnameError").style.color="green";
//             return true;    
//         }          
//       }

// // __________________________________VALIDATE LASTNAME____________________________________

// function ValidatelName(LastName)
// { 
//            if (!LastName.match(/^[a-zA-Z]+$/)) 
//         {
//             document.getElementById("lnameError").innerHTML="Only Alphabets are Allowed";
//             document.getElementById("lnameError").style.display="block";
//             document.getElementById("lnameError").style.color="red";
//             return false;
//         }
//         else
//         {
//             document.getElementById("lnameError").innerHTML="&#x2713";
//             document.getElementById("lnameError").style.display="block";
//             document.getElementById("lnameError").style.color="green";
//             return true;    
//         }    
// }

// __________________________________________VALIDATE PASSWORD______________________________________________


function validatePass(Password){
    
    // userPassFlag = false;
    if( Password.length < 8)
    {   
        document.getElementById("passError").innerHTML="Weak password - * Password Should Be Atleast 9-15 Charachers *";
        document.getElementById("passError").style.display="block";
        document.getElementById("passError").style.color="red";
        console.log("weak");
        userPassFlag=false;
    }
    else
    {
        document.getElementById("passError").innerHTML="&#x2713";
        document.getElementById("passError").style.display="block";
        document.getElementById("passError").style.color="green";
        console.log("strong");
        userPassFlag=true;
    }
}

// __________________________________________VALIDATE FIRSTNAME______________________________________________

function ValidatefName(firstname)
      { 
          userFnameFlag = false;
        if (!firstname.match(/^[a-zA-Z]+$/)) 
        {
            document.getElementById("fnameError").innerHTML="Please Enter Valid FirstName";
            document.getElementById("fnameError").style.display="block";
            document.getElementById("fnameError").style.color="red";
            userFnameFlag=false;
        }
        else
        {
            document.getElementById("fnameError").style.display="none";
            document.getElementById("fnameError").innerHTML="&#x2713";
            document.getElementById("fnameError").style.display="block";
            document.getElementById("fnameError").style.color="green";
            userFnameFlag=true;
        }    
            
      }

// __________________________________________VALIDATE LASTNAME______________________________________________
      

function ValidatelName(LastName)
{ 
       userLnameFlag = false;
           if (!LastName.match(/^[a-zA-Z]+$/)) 
        {
            document.getElementById("lnameError").innerHTML="Please Enter Valid LastName";
            document.getElementById("lnameError").style.display="block";
            document.getElementById("lnameError").style.color="red";
            userLnameFlag=false;
        }
        else
        {
            document.getElementById("lnameError").innerHTML="&#x2713";
            document.getElementById("lnameError").style.display="block";
            document.getElementById("lnameError").style.color="green";
            userLnameFlag=true;
        }    
}

// __________________________________________VALIDATE ADDRESS______________________________________________
      

function ValidatelAddress(Address)
{ 
       userAddressFlag = false;
        if(Address == "") 
        {
            document.getElementById("addressError").innerHTML="Please Enter Valid Address";
            document.getElementById("addressError").style.display="block";
            document.getElementById("addressError").style.color="red";
            userAddressFlag=false;
        }
        else
        {
            document.getElementById("addressError").innerHTML="&#x2713";
            document.getElementById("addressError").style.display="block";
            document.getElementById("addressError").style.color="green";
            userAddressFlag=true;
        }    
}
