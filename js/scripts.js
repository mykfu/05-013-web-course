$(document).ready(function() {
    $("#send-button").click(function (event) {
        event.preventDefault();
        $.ajax({
            crossOrigin: true,
            type: "POST",
            url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdUjYe_WL_sft1tR4ZqfCuHxBg0oZHVpsHT9ElAf1Hhu8lu4w/formResponse",
            data: {
                'entry.2005620554': $("#name").val(),
                'entry.1166974658': $("#phone").val(),
                'entry.839337160': $("#message").val()
            },
            success: function(data){
                console.log(data);
            }
        })
            .fail(function(){alert("failed(((")});
        $("#formModal").modal('hide');

    });


});