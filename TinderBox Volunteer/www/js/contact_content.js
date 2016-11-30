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
            'Authorization': 'Bearer ' + window.localStorage.getItem("token"),
            'Content-Type': "application/json",
        },
        url: 'http://tinderbox.mstdev.com/v1/supervisors/1',
        data: {
            format: 'json'
        },
        error: function(jqXHR, textStatus, errorThrown) {
            //$('#supervisor').html('<p>An error has occurred, check log! </p>');
            alert(jqXHR.status+ '|' +jqXHR.statusText+ '|' +errorThrown);
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
                var temp = 'tel: '+data['phone'];
                $('#phone_data').data('phone-number', temp);

        },
        type: 'GET'
    });

    //Fetch default messages
    fetchInbox();
    //Set focus for default button
    $('#inbox-btn').focus();
});

// Call function
function calls(){
   var n = $('#phone_data').data('phone-number');
   document.location.href = n;
}

////////// Fetch messages from API
function fetchInbox() {
    var msgInbox = null;
    $.ajax({
        xhrFields: {
            withCredentials: true
        },
        headers: {
            'Authorization': 'Bearer ' + window.localStorage.getItem("token"),
            'Content-Type': "application/json",
        },
        url: 'http://tinderbox.mstdev.com/v1/messages',
        data: {
            format: 'json'
        },
        error: function(jqXHR, textStatus, errorThrown) {
            $('#content_ul').html('<p>An error has occurred, check log! </p>');
            alert(jqXHR.status+' | '+textStatus+' | '+errorThrown);
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
            'Authorization': 'Bearer ' + window.localStorage.getItem("token"),
            'Content-Type': "application/json",
        },
        url: 'http://tinderbox.mstdev.com/v1/messages',
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
        '<span>'+data.name+'</span>' +
        '<span>'+data.date+'</span>' +
        '</p>';
    list += '<p class="msg_content">'+data.content.substring(0, 37)+'...'+'</p></div>';
    list += '<i class="fa fa-bars fa-2x burger-menu" aria-hidden="true"></i>';
    return list;
}

////////// POST new messages from API
function postNew()
{
    var msgData = setMsg();
    $.ajax({
        xhrFields: {
            withCredentials: true
        },
        headers: {
            'Authorization': 'Bearer ' + window.localStorage.getItem("token"),
            'Content-Type': "application/json",
        },
        url: 'http://tinderbox.mstdev.com/v1/messages',
        data: JSON.stringify(msgData),
        error: function(jqXHR, textStatus, errorThrown) {
            $('#content_ul').html('<p>An error has occurred, check log! </p>');
            alert(jqXHR.status+ '|' +jqXHR.statusText+ '|' +errorThrown);
        },
        dataType: 'json',
        success: function(data) {
            $("#content_ul").empty();
            var res = $("<p>").text("Successfully sent, check inbox!");
            $("#content_ul").append(res);
        },
        type: 'POST'
    });
}

// Set the message fields
function setMsg(){
    var subject = "test subject";
    var mto = 1;
    var mfrom = 2;
    var mdate = new Date().toISOString().slice(0, 19).replace('T', ' ');
    var mcontent = document.getElementById("msg_content").value;
    var msg =
        {
            "name": subject,
            "date": mdate,
            "content": mcontent,
            "sender": mfrom,
            "recipient": mto
        };
    return msg;
}


// Organize input fields into DOM elements
function newMsg() {
    var list = '<li class="msgNew_to">';
    list += '<label>To:</label>';
    list += '<input type="text" value="1" name="msg_email" id="msg_email"></li>';
    list += '<li class="msgNew_content">';
    list += '<label>Message:</label>';
    list += '<textarea name="msg_content" id="msg_content"></textarea></li>';
    list += '<li class="btn_line"><button name="submit" onclick="postNew()" type="submit" id="newMsg_btn">send</button></li>'
    $("#content_ul")
        .append(list);
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
        case 3:
            newMsg();
            break;
    }
}