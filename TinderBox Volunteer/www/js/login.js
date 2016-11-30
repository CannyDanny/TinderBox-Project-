/**
 * Created by Senk on 10/12/2016.
 */

// Redirect if user logged in already
$('document').ready(function() {
    var user = window.localStorage.getItem("security");
    if((user !== null) && (user !== "")){
        window.location = "main_menu.html";
    }
});

var attempt = 20; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ((username == "admin" && password == "admin") || (username == "" && password == "")){
        window.location = "main_menu.html"; // Redirecting to other page.
        return false;
    }
    else{
        attempt --;// Decrementing by one.
        alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
        if( attempt == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}

function ajax_validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    $.ajax({
        xhrFields: {
            withCredentials: true
        },
        headers: {
            'Authorization': 'Basic ' + btoa(username+':'+password)
        },
        url: 'http://tinderbox.mstdev.com/auth/users',
        data: {
            format: 'json'
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('Wrong credentials!');
            alert(jqXHR+textStatus+errorThrown);
            console.log(jqXHR+textStatus+errorThrown);
        },
        dataType: 'json',
        success: function(data) {
            var temp = 'Basic ' + btoa(username+':'+password);
            //window.localStorage.getItem("security");
            window.localStorage.setItem("security", temp);
            window.location = "main_menu.html"; // Redirecting to other page.
        },
        type: 'GET'
    });
}

function myFunction() {
    alert("Doesnt function");
}