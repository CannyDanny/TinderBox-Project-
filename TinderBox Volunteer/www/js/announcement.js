/**
 * Created by Tony Zongyu Chen on 20/10/2016.
 */
$('document').ready(function() {
    /** jQuery that loads data from db for announcements in frontend **/
    $.ajax({
        xhrFields: {
            withCredentials: true
        },
        headers: {
            'Authorization': 'Bearer ' + window.localStorage.getItem("token"),
            'Content-Type': "application/json",
        },
        url: 'http://tinderbox.mstdev.com/v1/announcements',
        data: {
            format: 'json'
        },
        error: function(jqXHR, textStatus, errorThrown) {
            //$('#supervisor').html('<p>An error has occurred, check log! </p>');
            alert(jqXHR.status+ '|' +jqXHR.statusText+ '|' +errorThrown);
        },
        dataType: 'json',
        success: function(data) {
            var text = '<div class="anno_articles" ' +
                'data-role="collapsible" ' +
                'data-inset="false" ' +
                'data-collapsed-icon="carat-d" ' +
                'data-expanded-icon="carat-u" ' +
                'data-iconpos="bottom">';
            text += '<h4>'+data['title']+
                        '<p>'+data['content'].substring(0, 20)+'...</p>'+
                        '<span class="right-autor">'+data['date']+'</span>'+
                    '</h4>';
            text += '<h5>'+data['title']+'</h5>';
            text += '<p>'+data['content']+'</p>';
            text += '<span class="right-autor">'+data['date']+'</span>';
            $('#anno_content').append(text);
        },
        type: 'GET'
    });
});