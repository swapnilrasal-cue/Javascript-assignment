function ValidateUser()
{
    var UserName = document.getElementById("username").value;
    var FirstName = document.getElementById("firstname").value;
    var LastName = document.getElementById("lastname").value;
    var Password = document.getElementById("password").value;
    var Address = document.getElementById("address").value;
    var Pic = document.getElementById("uploadImage").value;
    var Gender = document.querySelector('input[name=gen]:checked').value;

    console.log(Pic);
    var dataObj={"username":UserName,"firstname":FirstName,"lastname":LastName,"password":Password,"address":Address,"pic":Pic,"gender":Gender};
    var userRecord = JSON.stringify(dataObj);

    if(!localStorage.getItem(UserName)){  
        
        if(UserName.match(/.+@(cuelogic)\.com$/))
        { 
        document.getElementById("unameError").innerHTML="UserName* Available";
        document.getElementById("unameError").style.display="block";
        document.getElementById("unameError").style.color="green";
        console.log("proper");
        reg();   
        
        }

        else
        {
            alert("incorrect domain only cuelogic.com is allowed");
        }
        
    }else
    {
        document.getElementById("unameError").innerHTML="UserName* Already Exist";
        document.getElementById("unameError").style.display="block";
        document.getElementById("unameError").style.color="red";
    }
}

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
function PreviewImage() {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);

    oFReader.onload = function (oFREvent) {
        document.getElementById("uploadPreview").src = oFREvent.target.result;
    }
}

function reg(){
        // var userArray=[];
         
        var UserName = document.getElementById("username").value;
        var FirstName = document.getElementById("firstname").value;
        var LastName = document.getElementById("lastname").value;
        var Password = document.getElementById("password").value;
        var Address = document.getElementById("address").value;
        var Pic = document.getElementById("uploadImage").value;
        var Gender = document.querySelector('input[name=gen]:checked').value;
        
        if(UserName !== "" && FirstName!== "" && LastName!=="" && Password !== "" && Address !== "" && Pic !== "" && Gender !== "")
        {  

            if(Password.length > 8)
            {
                var dataObj={"username":UserName,"firstname":FirstName,"lastname":LastName,"password":Password,"address":Address,"pic":Pic,"gender":Gender};
                var userRecord = JSON.stringify(dataObj);
                localStorage.setItem(dataObj.username,userRecord);
                window.location ="./login.html";
            }
            else
            {
              document.getElementById("passError").innerHTML="Weak password - * Password should be atleast 9-15 charachers *";
              document.getElementById("passError").style.display="block";
              document.getElementById("passError").style.color="red";
              console.log("weak");
            }
        }
        else{
            document.getElementById("all-error-message").innerHTML="All Fields are Required ";
            document.getElementById("all-error-message").style.color="red";
        }
}

 
