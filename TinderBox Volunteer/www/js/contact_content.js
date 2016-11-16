/**
 * Created by zongy on 13-10-2016.
 */
function changeContent(temp) {
     var list = '';
    //         for(var i in data)
    //         {
    //             list += '<li>' +
    //                 '<div class="info-list">' +
    //                     '<div><input type="checkbox" /></div>' +
    //                     '<label>' +
    //                         '<p><span>Bo Jensen</span><span>13:25 12-10-2015</span></p>' +
    //                         '<p>Hello, here is the info text.</p>' +
    //                     '</label>' +
    //                     '<div>' +
    //                         '<i class="fa fa-bars fa-2x burger-menu" aria-hidden="true"></i>' +
    //                     '</div>' +
    //                 '</div>' +
    //                 '</li>';
    //       }
    if(temp === 1){
        var list = '<li>' +
                '<ul><div class="info-list">' +
                    '<div><input type="checkbox" name="checkbox-0"></div>' +
                    '<label>' +
                        '<p><span>Bo Jensen</span><span>13:25 12-10-2015</span></p>' +
                        '<p>Hello, here is the info text.</p>' +
                    '</label>' +
                    '<div>' +
                        '<i class="fa fa-bars fa-2x burger-menu" aria-hidden="true"></i>' +
                    '</div>' +
                '</div>' +
                '</li></ul>';
        $("#container").html(function() {
            return '<form id="content" action="" method="post">' +
                list + list + list +
                '</form>';
        });
    }
    else if(temp === 2){
        var list = '<li>' +
                '<input type="text">'
            '</li>';
        $("#container").html(function() {
            return '<form id="content" action="" method="post"' +
                '<ul class="new_ul"><label>To: </label>' +
                list +
                '<br />' +
                '<label>Title: </label>' +
                list + '<br />' +
                '<label>Message: </label>' +
                '<textarea></textarea></ul>' +
            '</form>'
        });
    } else if(temp === 3){
        $("#container").html(
            '<p>hej 3</p>');
    }
};

// jQuery(function() {
//     jQuery.ajax({
//         url: 'http://localhost:63342/www/contact.html',
//         contentType: 'application/json',
//         type: 'GET',
//         success: function(data, status, response)
//         {
//             console.log(status);
//             console.log(JSON.parse(data));
//             data = JSON.parse(data);
//
//             var list = '';
//             for(var i in data)
//             {
//                 list += '<li>' +
//                     '<div class="info-list">' +
//                         '<div><input type="checkbox" /></div>' +
//                         '<label>' +
//                             '<p><span>Bo Jensen</span><span>13:25 12-10-2015</span></p>' +
//                             '<p>Hello, here is the info text.</p>' +
//                         '</label>' +
//                         '<div>' +
//                             '<i class="fa fa-bars fa-2x burger-menu" aria-hidden="true"></i>' +
//                         '</div>' +
//                     '</div>' +
//                     '</li>';
//             }
//
//             var html = '<form id="content" method="post" action="">' + list + list + list + '</form>';
//
//             jQuery('#container').html(html);
//         }
//     });
//
    jQuery('#container').click('.changeBtn', function(e) {
        console.log(jQuery(e.target).data);
    });
//});