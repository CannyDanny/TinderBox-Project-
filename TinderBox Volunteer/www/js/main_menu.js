/**
 * Created by Senk on 10/12/2016.
 */
$( document ).ready(function() {
    hidestatus();
});

function logout(){
    var r = confirm("Do you want to log out?");
    if (r == true) {
        window.localStorage.removeItem("token");
    window.location = "index.html";
    }    
}

/*
 if (window.cordova && window.cordova.plugins.Keyboard) {
 cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
 cordova.plugins.Keyboard.disableScroll(true);
 }
 if (window.StatusBar) {
 // org.apache.cordova.statusbar required
 StatusBar.hide();
 StatusBar.styleDefault();
 }*/
