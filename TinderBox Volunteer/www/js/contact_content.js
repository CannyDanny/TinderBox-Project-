/**
 * Created by zongy on 13-10-2016.
 */
function changeContent(temp) {
    if(temp === 1){
        $("#content").attr('src',"img/img1.jpg");
    }
    else if(temp === 2){
        $("#content").attr('src',"img/img2.jpg");
    } else if(temp === 3){
        $("#content").attr('src',"img/img3.jpg");
    }
};