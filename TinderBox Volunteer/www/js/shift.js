/**
 * Created by tesu_ on 28/10/2016.
 */
$('document').ready(function() {
    $.ajax({
        xhrFields: {
            withCredentials: true
        },
        headers: {
            'Authorization': 'Bearer ' + window.localStorage.getItem("token"),
        },
        url: 'http://tinderbox.mstdev.com/v1/shifts',
        data: {
            format: 'json'
        },
        error: function(jqXHR, textStatus, errorThrown) {
            $('#set').html('<p>An error has occurred, check log! </p>');
            alert(jqXHR.status+ '|' +jqXHR.statusText+ '|' +errorThrown);
        },
        dataType: 'json',
        success: function(data) {
            var i=0;
            for (i = 0; i < data.length; i++) {
                var status = convertStatus(data[i].status);
                var content = '<div id="insideContent'+data[i].id+'" role="main" class="ui-content inside-content">';
                content += '<div class="'+status+'" data-role="collapsible" data-collapsed-icon="carat-d" data-expanded-icon="carat-u" data-iconpos="bottom">';
                var date = convertDate(data[i].date);
                var day = convertDay(date.getDay());
                var dateday = date.getDate();
                var month = convertMonth(date.getMonth());
                content += '<h5><div class="text-alignment">'+dateday+' '+month+'<br> '+day+' <br></div>';
                content += '<div class="text-alignment2"><br><b>Lead: </b>'+data[i].supervisor+' <br><b>At:</b> '+data[i].location+' <br><b>Time:</b> '+date.getHours()+':'+date.getMinutes()+'</div></h5>';
                content += '<ul id="list-'+data[i].id+'" data-role="listview" data-inset="false" class="ui-listview">';
                content += '<div class="buttonsCollaps"><div class="show-map-btn"><a href="map.html">Show on map</a></div>' +
                    '<div class="switch-shift-btn"><a href="trademarket.html">Switch shift</a></div></div>' +
                '<li>'+data[i].title+'</li></ul>';
                content += '</div>';
                content += '</div>';
                $("#set").append( content ).collapsibleset('refresh');
            }
        },
        complete: function(data){
            var temp = 'list-'+data[i].id;
            $(temp).listview('refresh');
        },
        type: 'GET'
    });

    function convertDate(date){
        var t = date.split(/[- :]/);
        var dat = new Date(Date.UTC(t[0], t[1]-1, t[2], t[3], t[4], t[5]));

        return dat;
    }

    function convertDay(n){
        var weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tues";
        weekday[3] = "Wed";
        weekday[4] = "Thurs";
        weekday[5] = "Fri";
        weekday[6] = "Sat";

        return weekday[n];
    }

    function convertMonth(n){
        var month = ["Jan", "Feb", "March", "Apr", "May", "June",
            "July", "Aug", "Sept", "Oct", "Nov", "Dec"
        ];

        return month[n];
    }

    function convertStatus(n) {
        var a = "";
        switch(n) {
            case 0:
                a = "status-invitation";
                break;
            case 1:
                a = "status-pending";
                break;
            case 2:
                a = "status-okay";
                break;
        }

        return a;
    }
});