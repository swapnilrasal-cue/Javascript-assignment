// ___________________________________SUCCESS MESSAGE __________________________________

(function(){
    let p = sessionStorage.getItem('test')
    if(p == 5){
       // document.getElementById("test").innerHTML = 'kasjckasjhckasjhck'
        console.log("Signup Sucessful");
        document.getElementById("success").style.display="block";
        sessionStorage.removeItem('test')
    }
    else
    {
        console.log("Signup Sucessful");
        document.getElementById("failure").style.display="block";
    }
})();


function valuser(username)
{
    console.log(username);

    if(localStorage.getItem(username)){
        console.log("user Found");
        document.getElementById("usernameError").style.display="block";
        document.getElementById("usernameError").innerHTML="user Found";
        document.getElementById("usernameError").style.color="green";
    }      
    else{
        console.log("user Not Found");
        document.getElementById("usernameError").style.display="block";
        document.getElementById("usernameError").innerHTML="user Not Found";
        document.getElementById("usernameError").style.color="red";
       
    }
}

function checklogin()
{
            var username = document.getElementById("user").value;
            var userpass = document.getElementById("pass").value;
            var userDetails = JSON.parse(localStorage.getItem(username));
            //     console.log(userDetails);
            // var check=userDetails.password;
            // console.log(check);
            if(localStorage.getItem(username)){
                console.log("user Found");
               
                if(userDetails.password !== userpass){
                    console.log("wrong Password Try Again");
                    document.getElementById("passwordError").style.display="block";
                    document.getElementById("passwordError").innerHTML="wrong Password Try Again";
                    document.getElementById("passwordError").style.color="red";
                }
                else{
                    console.log("password match");
                    sessionStorage.setItem('test',5);
                    window.location="./mainpage.html";
                    sessionStorage.setItem('uname',username);
                }
            }      
            else{
                console.log("user Not Found");
            }
}

