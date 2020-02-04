
var Login = (function () {


    function getData(data) {
        return JSON.parse(localStorage.getItem(data));
    }

    function getSession(sessionData) {
        return sessionStorage.getItem(sessionData);
    }

    function setSession(setSessionData1, setSessionData2) {
        sessionStorage.setItem(setSessionData1, setSessionData2);
    }

    function removeSession() {
        sessionStorage.removeItem('test')
    }


    // ___________________________________SUCCESS MESSAGE __________________________________

    (function () {
        let p = getSession('test');
        // sessionStorage.getItem('test')
        if (p == 'successfull') {
            console.log("Signup Sucessful");
            document.getElementById("success").classList.remove("hide");
            removeSession();
        }
    })();


    return {

        // _________________________________VALIDATE USERNAME __________________________________

        valuser: function (username) {
            console.log(username);

            if (localStorage.getItem(username)) {
                console.log('user Found');
                document.getElementById('usernameError').classList.remove("hide");
                document.getElementById('usernameError').innerHTML = "&#x2713";
            }
            else {
                console.log("user Not Found");
                document.getElementById('usernameError').classList.add("hide");
                document.getElementById("passwordError").classList.remove("hide");
                document.getElementById("passwordError").innerHTML = "Invalid UserName Or Password";

            }
        },

        // ____________________________VALIDATE USERNAME AND PASSWORD FOR LOGIN_____________________________

        checklogin: function () {
            var username = document.getElementById("user").value;
            var userpass = document.getElementById("pass").value;
            var userDetails = getData(username);
            // JSON.parse(localStorage.getItem(username));
            //     console.log(userDetails);
            if (localStorage.getItem(username)) {
                console.log("user Found");

                if (userDetails.password !== userpass) {
                    console.log("Invalid UserName or Password");
                    document.getElementById("passwordError").classList.remove("hide");
                    document.getElementById("passwordError").innerHTML = "Invalid UserName Or Password";

                }
                else {
                    console.log("password match");
                    setSession('test', 'successfull');
                    // sessionStorage.setItem('test','successfull');
                    window.location = "./mainpage.html";
                    setSession('uname', username);
                    // sessionStorage.setItem('uname',username);
                }
            }
            else {
                document.getElementById("passwordError").classList.remove("hide");
                document.getElementById("passwordError").innerHTML = "Invalid UserName Or Password";
            }
        }

    };

})();



