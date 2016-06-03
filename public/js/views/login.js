function vacio(input) {
    if (input.length == 0) {
        return true;
    } else {
        return false;
    }
}

$(document).ready(function () {

    $("input[name='usuario']").validCamp('abcdefghijklmnñopqrstuvwxyz1234567890@');
    $("input[name='contrasena']").validCamp('abcdefghijklmnñopqrstuvwxyz1234567890');

    $("input[name='submit']").click(function (e) {

        e.preventDefault();

        var url = $("form").attr('action');

        var data = {
            "usuario": $("input[name='usuario']").val(),
            "contrasena": $("input[name='contrasena']").val(),
            "csrf_token_name": get_csrf_hash
        };


        if (vacio(data.usuario)) {
            $(".validacion.usuario").show();
            return false;
        } else {
            $(".validacion.usuario").hide();
        }

        if (vacio(data.contrasena)) {
            $(".validacion.contrasena").show();
            return false;
        } else {
            $(".validacion.contrasena").hide();
        }


        $.ajax({
            url: url,
            type: 'POST',
            data: data,
            dataType: "json"
        }).done(function (data) {
            if (data.status) {
                window.location = url_reporte;
            } else {
                $(".datos-invalidos").show();
            }
        });

    });

});
