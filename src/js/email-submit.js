const $ = require('jquery');

function onSuccess(data) {
    if (data['result'] != "success") {
        console.log(data['msg']);
        if(data['msg'].includes("is already subscribed")) {
            $.notify("You've already signed up, silly!", {
                globalPosition: "top right",
                className: "info",
                gap: 3
            });
        }
    } else {
        $.notify("Yay! We'll be in touch!",{
            globalPosition:"top right",
            className: "success",
            gap: 3
        });
    }
    $('#mce-EMAIL').val(null)
}

$('#mc-embedded-subscribe-form').submit(function (e) {
    e.preventDefault();
    $.ajax({
        url: 'https://thefoldedelephant.us19.list-manage.com/subscribe/post-json?u=41f8724ef6a1ff9479fa87a3e&amp;id=c80fa324fb&c=?',
        type: 'GET',
        data: $('#mc-embedded-subscribe-form').serialize(),
        dataType: 'jsonp',
        contentType: "application/json; charset=utf-8",
        success: onSuccess
    });
});