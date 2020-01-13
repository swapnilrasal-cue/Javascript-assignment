   function reg()
        {
        var userArray=[];
         
        var UserName = document.getElementById("username").value;
        var FirstName = document.getElementById("firstname").value;
        var LastName = document.getElementById("lastname").value;
        var Password = document.getElementById("password").value;
        var Address = document.getElementById("address").value;
        var Pic = document.getElementById("pic").value;
        var Gender = document.querySelector('input[name=gen]:checked').value;
          
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

        function checklogin()
        {
            var username = document.getElementById("user").value;
            var userpass = document.getElementById("pass").value;
            console.log(username);
            console.log(userpass);
            var userDetails = JSON.parse(localStorage.getItem(username));
                console.log(userDetails);
            var check=userDetails.password;
            console.log(check);
            
            if(localStorage.getItem(username)){
                console.log("user Found");
               
                if(userDetails.password !== userpass){
                    console.log("wrong user");
                }
                else{
                    console.log("password match");
                    window.location="./profile.html";
                    sessionStorage.setItem('uname',username);
            
                }
            }      
            else{
                console.log("user Not Found");
            }
           }


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

function sessionClear(){
sessionStorage.clear();
window.location="./login.html";
}