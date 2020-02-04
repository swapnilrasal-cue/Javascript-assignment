var Profile = (function () {

    var userPassFlag = true;
    var userFnameFlag = true;
    var userLnameFlag = true;
    var userAddressFlag = true;

    function getData() {
        return JSON.parse(localStorage.getItem(sessionStorage.getItem("uname")));
    }

    function setData(data1, data2) {
        localStorage.setItem(data1, data2);
    }

    function getSession() {
        return sessionStorage.getItem('test');
    }

    function setSession() {
        sessionStorage.setItem('test', 'successfull');
    }


    function clearSession() {
        sessionStorage.clear();
    }

    function removeSession() {
        sessionStorage.removeItem('test');
    }


    // // __________________________________PREVENT BACK_______________________________________

    // function preventBack() { window.history.forward(); }
    // setTimeout("preventBack()", 0);
    // window.onunload = function () { null };

    // ___________________________________SUCCESS MESSAGE __________________________________

    (function () {
        let p = getSession();
        if (p == 'successfull') {
            console.log("profile edited Sucessful");
            document.getElementById("success").classList.remove("hide");
            // sessionStorage.removeItem('test')
            removeSession();
        }
        else {
            console.log("edit profile failed");
        }
    })();

    return {

        // __________________________________________VALIDATE PASSWORD______________________________________________


        validatePass:function(Password){

        // userPassFlag = false;
        if (Password.length < 8) {
            document.getElementById("passError").innerHTML = "Weak password - * Password Should Be Atleast 9-15 Charachers *";
            document.getElementById("passError").classList.remove("hide");
            // document.getElementById("passError").style.color="red";
            console.log("weak");
            userPassFlag = false;
        }
        else {
            document.getElementById("passError").innerHTML = "&#x2713";
            document.getElementById("passError").classList.remove("hide");
            // document.getElementById("passError").style.color="green";
            console.log("strong");
            userPassFlag = true;
        }
    },

    // __________________________________________VALIDATE FIRSTNAME______________________________________________

    ValidatefName:function(firstname) {
        userFnameFlag = false;
        if (!firstname.match(/^[a-zA-Z]+$/)) {
            document.getElementById("fnameError").innerHTML = "Please Enter Valid FirstName";
            document.getElementById("fnameError").classList.remove("hide");
            // document.getElementById("fnameError").style.color="red";
            userFnameFlag = false;
        }
        else {
            // document.getElementById("fnameError").style.display="none";
            document.getElementById("fnameError").innerHTML = "&#x2713";
            document.getElementById("fnameError").classList.remove("hide");
            // document.getElementById("fnameError").style.color="green";
            userFnameFlag = true;
        }

    },

    // __________________________________________VALIDATE LASTNAME______________________________________________


    ValidatelName:function(LastName) {
        userLnameFlag = false;
        if (!LastName.match(/^[a-zA-Z]+$/)) {
            document.getElementById("lnameError").innerHTML = "Please Enter Valid LastName";
            document.getElementById("lnameError").classList.remove("hide");
            // document.getElementById("lnameError").style.color="red";
            userLnameFlag = false;
        }
        else {
            document.getElementById("lnameError").innerHTML = "&#x2713";
            document.getElementById("lnameError").classList.remove("hide");
            // document.getElementById("lnameError").style.color="green";
            userLnameFlag = true;
        }
    },

    // __________________________________________VALIDATE ADDRESS______________________________________________


    ValidatelAddress:function(Address) {
        userAddressFlag = false;
        if (Address == "") {
            document.getElementById("addressError").innerHTML = "Please Enter Valid Address";
            document.getElementById("addressError").classList.remove("hide");
            // document.getElementById("addressError").style.color="red";
            userAddressFlag = false;
        }
        else {
            document.getElementById("addressError").innerHTML = "&#x2713";
            document.getElementById("addressError").classList.remove("hide");
            // document.getElementById("addressError").style.color="green";
            userAddressFlag = true;
        }
    },
    // ___________________________IMAGE TO STRING - PROFILE PIC__________________________________________


    PreviewImage:function() {
        var oFReader = new FileReader();
        oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);

        oFReader.onload = function (oFREvent) {
            document.getElementById("uploadPreview").src = oFREvent.target.result;
            var imagepath = oFREvent.target.result;

        }
    },


    // _______________________ASSIGN VALUE TO PROFILE PAGE __________________________________


    assignval:function() {
        var testuid = document.getElementById("username");
        var testfname = document.getElementById("firstname");
        var testlname = document.getElementById("lastname");
        var testpass = document.getElementById("password");
        var testaddr = document.getElementById("address");
        // var testpic=document.getElementById("uploadImage");
        var userImage = document.getElementById("uploadPreview");
        var testgen = document.getElementById("gen");
        console.log(testaddr);
        var test2 = getData();
        // JSON.parse(localStorage.getItem(sessionStorage.getItem("uname")));
        testuid.value = test2.username;
        testfname.value = test2.firstname;
        testlname.value = test2.lastname;
        testpass.value = test2.password;
        testaddr.value = test2.address;
        userImage.src = test2.pic;
        testgen.value = test2.gender;
    },

    // _______________________ASSIGN VALUE TO EDIT PROFILE PAGE ______________________________


    assignval2:function() {
        var testuid = document.getElementById("username");
        var testfname = document.getElementById("firstname");
        var testlname = document.getElementById("lastname");
        var testpass = document.getElementById("password");
        var testaddr = document.getElementById("address");
        // var testpic=document.getElementById("uploadImage");
        var userImage = document.getElementById("uploadPreview");
        // var testgen=document.getElementById("gen");

        var test2 = getData();
        // JSON.parse(localStorage.getItem(sessionStorage.getItem("uname")));
        console.log(test2.gender);

        testuid.value = test2.username;
        testfname.value = test2.firstname;
        testlname.value = test2.lastname;
        testpass.value = test2.password;
        testaddr.value = test2.address;
        userImage.src = test2.pic;
        // testgen.value=test2.gender;

        if (test2.gender == "Male") {
            document.getElementById("Male").checked = true
        }
        else if (test2.gender == "Female") {
            document.getElementById("Female").checked = true
        }
        else if (test2.gender == "Other") {
            document.getElementById("Other").checked = true
        }
    },

    // __________________________________LOGOUT USER________________________________________

    sessionClear:function() {
        clearSession();
        window.location = "./login.html";
    },

    // __________________________________EDIT USER PROFILE__________________________________

    EditUserData:function() {
        var test3 = getData();
        // JSON.parse(localStorage.getItem(sessionStorage.getItem("uname")));
        var UserName = document.getElementById("username").value;
        var FirstName = document.getElementById("firstname").value;
        var LastName = document.getElementById("lastname").value;
        var Password = document.getElementById("password").value;
        var Address = document.getElementById("address").value;
        var Pic = document.getElementById("uploadPreview").src;
        var Gender = document.querySelector('input[name=gen]:checked').value;

        test3.username = document.getElementById("username").value;
        test3.firstname = document.getElementById("firstname").value;
        test3.lastname = document.getElementById("lastname").value;
        test3.password = document.getElementById("password").value;
        test3.address = document.getElementById("address").value;
        test3.pic = document.getElementById("uploadPreview").src;
        test3.gender = document.querySelector('input[name=gen]:checked').value;

        console.log(test3);
        var userRecord = JSON.stringify(test3);

        // console.log('userPassFlag',userPassFlag)
        // console.log('userFnameFlag',userFnameFlag)
        // console.log('userLnameFlag',userLnameFlag)
        if (userPassFlag && userFnameFlag && userLnameFlag && userAddressFlag) {
            setData(test3.username, userRecord);
            // localStorage.setItem(test3.username,userRecord);
            setSession();
            // sessionStorage.setItem('test','successfull');
            window.location = "./profile.html";
        }
        else {
            alert("You Must Fill In All Of The Fields Properly");
        }

    }

};




}) ();