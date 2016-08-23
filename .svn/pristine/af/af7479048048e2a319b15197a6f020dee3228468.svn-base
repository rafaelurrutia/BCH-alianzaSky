function telefono_invalido(input) {

    input = input.replace('-', '');

    if (input.length <= 6) {
        return true;
    } else {
        return false;
    }

}

function vacio(input) {
    if (input.length == 0) {
        return true;
    } else {
        return false;
    }
}

var Fn = {
    validaRut: function (rutCompleto) {
        if (!/^[0-9]+-[0-9kK]{1}$/.test(rutCompleto)) return false;
        var tmp = rutCompleto.split('-');
        if (tmp[1] == 'K') tmp[1] = 'k';
        return (Fn.dv(tmp[0])) == tmp[1];
    },
    dv: function (T) {
        var M = 0,
            S = 1;
        for (; T; T = Math.floor(T / 10))
            S = (S + T % 10 * (9 - M++ % 6)) % 11;
        return S ? S - 1 : 'k';
    }
}

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function isLetter(letter) {
    var patron = /^[a-zA-ZÑñáéíóú\s]*$/;
    if (!letter.search(patron))
        return false;
    else
        return true;
}

function isNumber(number) {
    var patron = /^[a-zA-Z\s]*$/;
    if (!number.search(patron))
        return false;
    else
        return true;
}

function enviaForm() {
    var data = {
        "rut": $("input[name='rut']").val(),
        "nombres": $("input[name='nombres']").val(),
        "apellido_paterno": $("input[name='apellido_paterno']").val(),
        "apellido_materno": $("input[name='apellido_materno']").val(),
        "renta_liquida": $("select[name='renta_liquida']").val(),
        "telefono1": $("input[name='telefono1']").val(),
        "telefono2": $("input[name='telefono2']").val(),
        "email": $("input[name='email']").val(),
        "confirmar_email": $("input[name='confirmar_email']").val(),
        "rut_ejecutivo": $("input[name='rut_ejecutivo']").val()
    };

    var flag_rut, flag_nombres, flag_apellido_paterno, flag_apellido_materno, flag_renta_liquida, flag_telefono1, flag_email, flag_confirmar_email, flag_rut_ejecutivo;

    var flag_unique = false;

    flag_rut = false;
    flag_nombres = false;
    flag_apellido_paterno = false;
    flag_apellido_materno = false;
    flag_renta_liquida = false;
    flag_telefono1 = false;
    flag_email = false;
    flag_confirmar_email = false;
    flag_rut_ejecutivo = false;

    data.rut = data.rut.replace('.', '');
    data.rut = data.rut.replace('.', '');

    data.rut_ejecutivo = data.rut_ejecutivo.replace('.', '');
    data.rut_ejecutivo = data.rut_ejecutivo.replace('.', '');

    data.telefono1 = data.telefono1.replace('-', '');
    data.telefono2 = data.telefono2.replace('-', '');

    if (vacio(data.rut)) {
        flag_rut = true;
        flag_unique = true;
    } else if (!Fn.validaRut(data.rut)) {
        flag_rut = true;
        flag_unique = true;
    } else {
        flag_rut = false;
        flag_unique = false;
        $(".validacion.rut").hide();
    }

    if (vacio(data.nombres)) {
        flag_nombres = true;
        flag_unique = true;
    } else if (isLetter(data.nombres)) {
        flag_nombres = true;
        flag_unique = true;
    } else {
        $(".validacion.nombres").hide();
        flag_nombres = false;
        flag_unique = false;
    }

    if (vacio(data.apellido_paterno)) {
        flag_apellido_paterno = true;
        flag_unique = true;
    } else if (isLetter(data.apellido_paterno)) {
        flag_apellido_paterno = true;
        flag_unique = true;
    } else {
        $(".validacion.apellido_paterno").hide();
        flag_apellido_paterno = false;
        flag_unique = false;
    }

    if (vacio(data.apellido_materno)) {
        flag_apellido_materno = true;
        flag_unique = true;
    } else if (isLetter(data.apellido_materno)) {
        flag_apellido_materno = true;
        flag_unique = true;
    } else {
        $(".validacion.apellido_materno").hide();
        flag_apellido_materno = false;
        flag_unique = false;
    }

    if (vacio(data.renta_liquida)) {
        flag_renta_liquida = true;
        flag_unique = true;
    } else {
        $(".validacion.renta_liquida").hide();
        flag_renta_liquida = false;
        flag_unique = false;

    }

    if (vacio(data.telefono1)) {
        flag_telefono1 = true;
        flag_unique = true;
    } else if (telefono_invalido(data.telefono1)) {
        flag_telefono1 = true;
        flag_unique = true;
    } else {
        $(".validacion.telefono_1").hide();
        flag_unique = false;
        flag_telefono1 = false;
    }

    if (vacio(data.email)) {
        flag_email = true;
        flag_unique = true;
    } else if (!isEmail(data.email)) {
        flag_email = true;
        flag_unique = true;
    } else {
        $(".validacion.email").hide();
        flag_email = false;
        flag_unique = false;
    }

    if (vacio(data.confirmar_email)) {
        flag_confirmar_email = true;
        flag_unique = true;
    } else if (data.confirmar_email != data.email) {
        flag_confirmar_email = true;
        flag_unique = true;
    } else {
        $(".validacion.confirmar_email").hide();
        flag_confirmar_email = false;
        flag_unique = false;
    }

    if (vacio(data.rut_ejecutivo)) {
        flag_rut_ejecutivo = true;
        flag_unique = true;
    } else if (!Fn.validaRut(data.rut_ejecutivo)) {
        flag_rut_ejecutivo = true;
        flag_unique = true;
    } else {
        flag_rut_ejecutivo = false;
        flag_unique = false;
        $(".validacion.rut_ejecutivo").hide();
    }

    if (flag_rut) {
        $(".validacion.rut").fadeIn();
    }
    if (flag_nombres) {
        $(".validacion.nombres").fadeIn();
    }
    if (flag_apellido_paterno) {
        $(".validacion.apellido_paterno").fadeIn();
    }
    if (flag_apellido_materno) {
        $(".validacion.apellido_materno").fadeIn();
    }
    if (flag_renta_liquida) {
        $(".validacion.renta_liquida").fadeIn();
    }
    if (flag_telefono1) {
        $(".validacion.telefono_1").fadeIn();
    }
    if (flag_email) {
        $(".validacion.email").fadeIn();
    }
    if (flag_confirmar_email) {
        $(".validacion.confirmar_email").fadeIn();
    }
    if (flag_rut_ejecutivo) {
        $(".validacion.rut_ejecutivo").fadeIn();
    }

    if (flag_rut == false && flag_nombres == false && flag_apellido_paterno == false && flag_apellido_materno == false && flag_renta_liquida == false && flag_telefono1 == false && flag_email == false && flag_confirmar_email == false && flag_rut_ejecutivo == false) {
        return true;
    } else {
        return false;
    }
}

$(document).ready(function () {

    $("input[name='rut']").val('');
    $("input[name='nombres']").val('');
    $("input[name='apellido_paterno']").val('');
    $("input[name='apellido_materno']").val('');
    $("select[name='renta_liquida']").val('');
    $("input[name='telefono1']").val('');
    $("input[name='telefono2']").val('');
    $("input[name='email']").val('');
    $("input[name='confirmar_email']").val('');
    $("input[name='rut_ejecutivo']").val('');

    $("input[name='rut'],input[name='rut_ejecutivo']").validCamp('1234567890-kK');
    $("input[name='nombres'],input[name='apellido_paterno'],input[name='apellido_materno']").validCamp('abcdefghijklmnñopqrstuvwxyzáéíóú ');
    $("input[name='telefono1'],input[name='telefono2']").validCamp('1234567890-');
    $("input[name='email'],input[name='confirmar_email']").validCamp('abcdefghijklmnñopqrstuvwxyz1234567890@._-');


    $("input[name='email']").bind("copy", function (e) {
        e.preventDefault();
    });

    $("input[name='confirmar_email']").bind("paste", function (e) {
        e.preventDefault();
    });

    $("input[name='rut_ejecutivo']").Rut({
        format_on: 'keyup'
    });

    $("input[name='rut']").Rut({
        format_on: 'keyup'
    });


    $("input[name='telefono1']").keyup(function () {
        var curchr = this.value.length;
        var curval = $(this).val();
        if (curchr == 1) {
            $("input[name='telefono1']").val(curval + "-");
        }

    });

    $("input[name='telefono2']").keyup(function () {
        var curchr = this.value.length;
        var curval = $(this).val();
        if (curchr == 1) {
            $("input[name='telefono2']").val(curval + "-");
        }
    });

});
