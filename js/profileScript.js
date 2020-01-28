// ___________________________________SUCCESS MESSAGE __________________________________

(function(){
    let p = sessionStorage.getItem('test')
    if(p == 5){
       // document.getElementById("test").innerHTML = 'kasjckasjhckasjhck'
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
    userImage.src = test2.pic;
    testgen.value=test2.gender;

    // var userImg= test2.pic;
    
    // console.log(userImg);
    // document.getElementById("profileDp").src="userImg";
    // setprofilePic();

}

function assignval2()
{
    var testuid=document.getElementById("username");
    var testfname=document.getElementById("firstname");
    var testlname=document.getElementById("lastname");
    var testpass=document.getElementById("password");
    var testaddr=document.getElementById("address");
    // var testpic=document.getElementById("uploadImage");
    var userImage = document.getElementById("uploadPreview");
    var testgen=document.getElementById("gen");

    var testgen1=document.getElementsByTagName('input[type=radio]')
    
    // console.log(testuid);
    // console.log(testfname);
    // console.log(testlname);
    // console.log(testpass);
    // console.log(testaddr);

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
    // document.getElementById(test2.gender).checked = true;

 }


function sessionClear()
{
sessionStorage.clear();
window.location="./login.html";
}


function EditUserData(){
    var test3=JSON.parse(localStorage.getItem(sessionStorage.getItem("uname")));
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
        // var dataObj={"username":UserName,"firstname":FirstName,"lastname":LastName,"password":Password,"address":Address,"pic":Pic,"gender":Gender};
        // userArray.push(dataObj);
        // var userRecord = JSON.stringify(dataObj);
        
        test3.username = document.getElementById("username").value;
        test3.firstname= document.getElementById("firstname").value;
        test3.lastname= document.getElementById("lastname").value;
        test3.password= document.getElementById("password").value;
        test3.address= document.getElementById("address").value;
        test3.pic= document.getElementById("uploadPreview").src;
        test3.gender= document.querySelector('input[name=gen]:checked').value;
        
        console.log(test3);
        var userRecord = JSON.stringify(test3);
        localStorage.setItem(test3.username,userRecord);
        sessionStorage.setItem('test',5);
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

