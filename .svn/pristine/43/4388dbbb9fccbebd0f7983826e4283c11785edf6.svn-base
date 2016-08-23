<?php
defined('BASEPATH') OR exit('No direct script access allowed');


//if((!isset($_SESSION[session_id().'_usuario_status']))||($_SESSION[session_id().'_usuario_status']!=='logged')){
//     redirect('/login');
//}

if(!$this->session->userdata('user')){
    redirect('/login');
}

?>
    <!DOCTYPE html>
    <html lang="en">


    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="format-detection" content="telephone=no">
        <title>Reporte</title>

        <link rel="stylesheet" type='text/css' href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
        <link rel="stylesheet" type="text/css" href="<?php echo base_url("public/css/main.css"); ?>">
        <link rel='stylesheet' type='text/css' href='https://fonts.googleapis.com/css?family=Roboto:400,300,700'>

    </head>

    <body>

        <div class="header bg-color-azul-1">
            <img src="<?php echo base_url("public/img/desktop-logo-header.png"); ?>" alt="">
        </div>
        <div class="header-mobile">
            <img src="<?php echo base_url("public/img/desktop-travel-sky.png"); ?>" alt="">
        </div>

        <div class="avion">
            <img src="<?php echo base_url("public/img/desktop-avion.png"); ?>" alt="">
        </div>

        <div class="reporte">

            <div class="text">
                <h1 class="fg-white">Venta referidos Sky</h1>
                <h2 class="fg-white">Descarga de registrados</h2>
            </div>
            <div class="image-triangle">
                <img src="<?php echo base_url("public/img/desktop-triangulo-blanco.png"); ?>" alt="">
            </div>

            <div class="contenedor">

                <div class="formulario">

                    <div class="text-seleccione">
                        Seleccione un rango de fechas
                    </div>
                    <?php

            echo form_open("Reporte/generar_reporte", $attributes);

            ?>

                        <div class="form-row">
                            <div class="form-column">
                                <label for="">Desde</label>
                                <div class="fecha-cont">
                                    <?php echo form_input($data_fecha1); ?>
                                </div>
                                <div class="validacion fecha1">
                                    <div class="arrow">
                                    </div>La fecha no es válida, por favor ingrésala nuevamente</div>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-column">
                                <label class="position-relative" for="">Hasta</label>
                                <div class="fecha-cont">
                                    <?php echo form_input($data_fecha2); ?>
                                </div>
                                <div class="validacion fecha2">
                                    <div class="arrow">
                                    </div>La fecha no es válida, por favor ingrésala nuevamente</div>
                            </div>
                        </div>

                        <div class="datos-invalidos">
                            Las fechas no son válidas, por favor ingrésala nuevamente
                        </div>

                        <div class="button">
                            <?php
                echo form_submit('submit', 'Descargar', "class='txt-button' ");
                ?>
                        </div>
                        <?php echo form_close(); ?>

                </div>
            </div>
        </div>
        <div class="footer"></div>
        <script>
            var url = '<?php echo base_url(); ?>';
        </script>
        <script type="text/javascript" src="<?php echo base_url("public/js/jquery-1.7.1.min.js"); ?>"></script>
        <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
        <script type="text/javascript" src="<?php echo base_url("public/js/keypress.js"); ?>"></script>
        <script type="text/javascript" src="<?php echo base_url("public/js/views/reporte.js"); ?>"></script>
    </body>

    </html>
