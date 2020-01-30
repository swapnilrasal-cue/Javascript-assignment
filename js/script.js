var userNameFlag=false;
var userPassFlag=false;
var userFnameFlag=false;
var userLnameFlag=false;

// __________________________________________VALIDATE USER______________________________________________

function ValidateUser()
{
    var UserName = document.getElementById("username").value;
    var FirstName = document.getElementById("firstname").value;
    var LastName = document.getElementById("lastname").value;
    var Password = document.getElementById("password").value;
    var Address = document.getElementById("address").value;
    var Pic = document.getElementById("uploadPreview").src;
    var Gender = document.querySelector('input[name=gen]:checked').value;

    console.log(Pic);
    var dataObj={"username":UserName,"firstname":FirstName,"lastname":LastName,"password":Password,"address":Address,"pic":Pic,"gender":Gender};
    var userRecord = JSON.stringify(dataObj);

    if(UserName !== "" && FirstName!== "" && LastName!=="" && Password !== "" && Address !== "" && Pic !== "" && Gender !== "")
    {  
       if(userNameFlag == true && userPassFlag == true && userFnameFlag == true && userLnameFlag == true)
       {
           reg();
       }
    
    }
    else{
    alert("You Must Fill In All Of The Fields");
    }
}

// __________________________________________VALIDATE USERNAME______________________________________________


function ValidateUserName()
{
    var UserName = document.getElementById("username").value;
   
      if(!localStorage.getItem(UserName)){  
        
        if(UserName.match(/.+@(cuelogic)\.com$/))
          { 
            document.getElementById("unameError").innerHTML="&#x2713";
            document.getElementById("unameError").style.display="block";
            document.getElementById("unameError").style.color="green";
            console.log("proper");
            userNameFlag=true;
          }
        else
          {
            document.getElementById("unameError").innerHTML="Incorrect Domain Only cuelogic.com is Allowed";
            document.getElementById("unameError").style.display="block";
            document.getElementById("unameError").style.color="red";
            userNameFlag=false;
          }
        
        }
        else
         {
           document.getElementById("unameError").innerHTML="UserName* Already Exist";
           document.getElementById("unameError").style.display="block";
           document.getElementById("unameError").style.color="red";
         }
        
}

// __________________________________________VALIDATE PASSWORD______________________________________________


function validatePass(Password){
    
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

// ___________________________IMAGE TO STRING - PROFILE PIC__________________________________________


function PreviewImage(){
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);

    oFReader.onload = function (oFREvent) {
        document.getElementById("uploadPreview").src = oFREvent.target.result;
        var imagepath=oFREvent.target.result;
        // localStorage.setItem("imagepath",imagepath);
    }
}

// ____________________________________REGISTER USER RECORD___________________________________________


function reg(){

        var UserName = document.getElementById("username").value;
        var FirstName = document.getElementById("firstname").value;
        var LastName = document.getElementById("lastname").value;
        var Password = document.getElementById("password").value;
        var Address = document.getElementById("address").value;
        var Pic = document.getElementById("uploadPreview").src;
        var Gender = document.querySelector('input[name=gen]:checked').value;
        
                var dataObj= {
                    "username":UserName,
                    "firstname":FirstName,
                    "lastname":LastName,
                    "password":Password,
                    "address":Address,
                    "pic": Pic,
                    "gender":Gender,
                    "todoId": 1 ,
                    "todotask":[],
                };

                var userRecord = JSON.stringify(dataObj);
                localStorage.setItem(dataObj.username,userRecord);
                sessionStorage.setItem('test',5);
                window.location ="./login.html";
                document.getElementById("registrationForm").reset();
  
}