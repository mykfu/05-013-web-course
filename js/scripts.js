$(document).ready(function() {
    $("#send-button").click(function (event) {
        event.preventDefault();
        var url = $( '#url' ).val( $( this ).val() );
        $.ajax({
            crossOrigin: true,
            type: "POST",
            url: url,
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