/**
 * Created by Tony Zongyu Chen on 13-10-2016.
 */
$('document').ready(function() {
    /** jQuery that loads data from db for supervisor in frontend **/
    $.ajax({
        xhrFields: {
            withCredentials: true
        },
        headers: {
            'Authorization': 'Basic ' + btoa('test:test')
        },
        url: 'http://10.140.64.129/Tinderbox-Project-BackEnd/yii_api/api/web/v1/supervisors/1',
        data: {
            format: 'json'
        },
        error: function(jqXHR, textStatus, errorThrown) {
            $('#supervisor').html('<p>An error has occurred, check log! </p>');
            console.log(jqXHR+textStatus+errorThrown);
        },
        dataType: 'json',
        success: function(data) {
                var text = '<p>';
                text += '<span>'+data['name']+'</span>';
                text += '<span>'+data['title']+'</span>';
                text += '<span>'+data['team']+'</span>';
                text += '<span>'+data['phone']+'</span>';
                text += '<span>'+data['email']+'</span>';
                $('#supervisor').append(text);

        },
        type: 'GET'
    });

    //Fetch default messages
    fetchInbox();
    //Set focus for default button
    $('#inbox-btn').focus();
});
////////// Fetch messages from API
function fetchInbox() {
    var msgInbox = null;
    $.ajax({
        xhrFields: {
            withCredentials: true
        },
        headers: {
            'Authorization': 'Basic ' + btoa('test:test')
        },
        url: 'http://10.140.64.129/Tinderbox-Project-BackEnd/yii_api/api/web/v1/messages',
        data: {
            format: 'json'
        },
        error: function(jqXHR, textStatus, errorThrown) {
            $('#content_ul').html('<p>An error has occurred, check log! </p>');
            console.log(jqXHR+textStatus+errorThrown);
        },
        dataType: 'json',
        success: function(data) {
            var i=0;
            for (i = 0; i < data.length; i++)
            {
                var list = order(data[i]);
                //$('#content_ul').append(list);
                data[i] = list;
            }
            addToList("#content_ul", data);
        },
        type: 'GET'
    });
}

////////// Fetch sent messages from API
function fetchSent() {
    var msgSent = null;
    $.ajax({
        xhrFields: {
            withCredentials: true
        },
        headers: {
            'Authorization': 'Basic ' + btoa('test:test')
        },
        url: 'http://10.140.64.129/Tinderbox-Project-BackEnd/yii_api/api/web/v1/messages',
        data: {
            format: 'json'
        },
        error: function(jqXHR, textStatus, errorThrown) {
            $('#content_ul').html('<p>An error has occurred, check log! </p>');
            console.log(jqXHR+textStatus+errorThrown);
        },
        dataType: 'json',
        success: function(data) {
            var i=0;
            for (i = 0; i < data.length; i++)
            {
                var list = order(data[i]);
                //$('#content_ul').append(list);
                data[i] = list;
            }
            addToList("#content_ul", data);
        },
        type: 'GET'
    });
}

// Append to content DOM
function addToList(ident, data){
    for (i = 0; i < data.length; i++)
    {
        $(ident).append(data[i]);
    }
}

// Organize pure data into DOM elements
function order(data) {
    var list = '<li>';
    list += '<input type="checkbox" name="checkbox-0">';
    list += '<div id="messages">' +
        '<p class="msg_title">' +
        '<span>'+data.firstname+'</span>' +
        '<span>'+data.date+'</span>' +
        '</p>';
    list += '<p>'+data.content.substring(0, 35)+'...'+'</p></div>';
    list += '<i class="fa fa-bars fa-2x burger-menu" aria-hidden="true"></i>';
    return list;
}

// Button click function
function changeContent(n) {
    //Empty data area
    $("#content_ul").empty();
    switch(n) {
        case 1:
            fetchInbox();
            break;
        case 2:
            fetchSent();
            break;
    }
}