/**
 * Created by Senk on 10/12/2016.
 */
var hidestat = function(){
    if(window.StatusBar){
        StatusBar.hide();
    }
    setTimeout(hidestat, 3000);
};