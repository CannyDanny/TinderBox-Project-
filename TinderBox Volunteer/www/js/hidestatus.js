/**
 * Created by Senk on 10/12/2016.
 */

var hidestatus = function(){
    if(window.StatusBar){
        StatusBar.hide();
    }
    setTimeout(hidestatus, 3000);
};