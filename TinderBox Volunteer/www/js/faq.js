$('document').ready(function() {
    $.ajax({
        xhrFields: {
            withCredentials: true
        },
        headers: {
            'Authorization': 'Basic ' + btoa('test:test')
        },
        url: 'http://10.140.72.137/yii_api/api/web/v1/faqs',
        data: {
            format: 'json'
        },
        error: function(jqXHR, textStatus, errorThrown) {
            $('#faq-paragraph').html('<p>An error has occurred, check log! </p>');
            console.log(jqXHR+textStatus+errorThrown);
        },
        dataType: 'json',
        success: function(data) {
            var i=0;
            for (i = 0; i < data.length; i++) {
                var content = "<div data-role='collapsible' id='set" + i + "'><h3>" + data[i].title + "</h3><p>" + data[i].content + "</p></div>";
                $("#set").append( content ).collapsibleset('refresh');
            }
        },
        type: 'GET'
    });
});