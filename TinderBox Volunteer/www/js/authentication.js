$(document).ready(function() {
    var user = window.localStorage.getItem("token");
    if((user == null) || (user == "")){
        window.location = "index.html"; 
    }
});
