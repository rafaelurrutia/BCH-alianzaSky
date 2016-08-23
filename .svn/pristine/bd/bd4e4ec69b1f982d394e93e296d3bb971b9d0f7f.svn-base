function vacio(input) {
    if (input.length == 0) {
        return true;
    } else {
        return false;
    }
}

function fecha_invalida(fecha1, fecha2) {
    var fecha1 = fecha1.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3");
    var fecha2 = fecha2.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3");

    if (new Date(fecha1) > new Date(fecha2)) {
        return true;
    } else {
        return false;
    }
}

function base_url(segment) {
    var pathArray, indexOfSegment;
    pathArray = window.location.pathname.split('/');
    indexOfSegment = pathArray.indexOf(segment);
    return window.location.origin + pathArray.slice(0, indexOfSegment).join('/') + '/';
}

$.datepicker.regional['es'] = {
    closeText: 'Cerrar',
    prevText: '< Ant',
    nextText: 'Sig >',
    currentText: 'Hoy',
    monthNames: ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'],
    monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
    dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    weekHeader: 'Sm',
    dateFormat: 'dd/mm/yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['es']);

$(function () {

    $("input[id='fecha1'],input[id='fecha2']").validCamp('1234567890/');

    $("#fecha1,#fecha2").datepicker("option", "dateFormat", 'dd-mm-yy');
    $("#fecha1,#fecha2").datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        showOn: "button",
        buttonImage: url + "public/img/desktop-calendar.gif",
        buttonImageOnly: true,
        buttonText: "Select date",
        beforeShow: function (input, inst) {
            if ($(window).width() > 800) {
                inst.dpDiv.css({
                    marginTop: -(input.offsetHeight + 20) + 'px',
                    marginLeft: (input.offsetWidth + 10) + 'px'
                });
            } else {
                inst.dpDiv.css({
                    marginTop: 10 + 'px',
                    marginLeft: 0 + 'px'
                });
            }
        }
    });

    $(window).on('resize orientationchange', function (e) {
        var dpInput, dpElem;

        if ($(window).width() > 800) {
            if ($.datepicker._datepickerShowing) {
                var datepicker = $.datepicker._curInst;
                dpInput = datepicker.input;
                dpElem = datepicker.dpDiv;
                dpElem.position({
                    my: 'left top',
                    of: dpInput,
                    at: 'right+10 top-20'
                });
            }
        } else {
            if ($.datepicker._datepickerShowing) {
                var datepicker = $.datepicker._curInst;
                dpInput = datepicker.input;
                dpElem = datepicker.dpDiv;
                dpElem.position({
                    my: 'left top',
                    of: dpInput,
                    at: 'left bottom+10'
                });
            }
        }

    });

    $("input[name='submit']").click(function () {

        var data = {
            "fecha1": $("input[id='fecha1']").val(),
            "fecha2": $("input[id='fecha2']").val()
        };

        if (vacio(data.fecha1)) {
            $(".validacion.fecha1").show();
            return false;
        } else {
            $(".validacion.fecha1").hide();
        }

        if (vacio(data.fecha2)) {
            $(".validacion.fecha2").show();
            return false;
        } else {
            $(".validacion.fecha2").hide();
        }

        if (fecha_invalida(data.fecha1, data.fecha2)) {
            $(".datos-invalidos").show();
            return false;
        } else {
            $(".datos-invalidos").hide();
            return true;
        }


    });


});
