/**
 * Created by Senk on 12/1/2016.
 */
// Wait for device API libraries to load
//
function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

// device APIs are available
//
function onDeviceReady() {
    // Register the event listener
    document.addEventListener("backbutton", onBackKeyDown, false);
}

// Handle the back button
//
function onBackKeyDown() {
    var page = $("body").pagecontainer("getActivePage").attr('id');
    if ((page == "page_login") || (page == "page_menu")) {
        navigator.app.exitApp();
    }else{
        navigator.app.backHistory();
    }
}