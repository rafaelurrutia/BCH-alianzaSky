<?php
defined('BASEPATH') OR exit('No direct script access allowed');

?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="format-detection" content="telephone=no">
        <title>Formulario</title>

        <link rel="stylesheet" type="text/css" href="<?php echo base_url("public/css/main.css"); ?>">
        <link rel='stylesheet' type='text/css' href='https://fonts.googleapis.com/css?family=Roboto:400,300,700'>

    </head>

    <body>

        <div class="header-formulario">
           <div class="banco bg-color-azul-1">
               <img src="<?php echo base_url("public/img/desktop-logo-header.png"); ?>" alt="">
           </div>
           <div class="travel">
               <img src="<?php echo base_url("public/img/desktop-travel-sky.png"); ?>" alt="">
           </div>

        </div>
        <div class="wrap">

        <div class="header-mobile">
            <img src="<?php echo base_url("public/img/desktop-travel-sky.png"); ?>" alt="">
        </div>

        <div class="avion">
            <img src="<?php echo base_url("public/img/desktop-avion-formulario.png"); ?>" alt="">
        </div>

        <div class="formulario-alianza">

            <div class="text form-al">
                <h1 class="fg-white">Venta referidos Sky</h1>

            </div>
            <div class="image-triangle">
                <img src="<?php echo base_url("public/img/desktop-triangulo-blanco.png"); ?>" alt="">
            </div>

            <div class="contenedor">

                <div class="formulario">
                <?php
                echo form_open("Formulario_alianza/post_formulario_alianza", $attributes);
                ?>

                    <h2>Se deben completar todos los campos</h2>

                    <div class="form-row">
                        <div class="form-column">
                            <label for="">*Rut</label>
                            <?php echo form_input($data_rut_cliente); ?>
                            <span>Ej: 1234567-8</span>
                            <div class="validacion rut"><div class="arrow"></div>El Rut no es válido, por favor ingréselo nuevamente</div>
                        </div>
                        <div class="form-relleno"></div>
                        <div class="form-column">
                            <label for="">*Nombres</label>
                            <?php echo form_input($data_nombres); ?>
                            <div class="validacion nombres"><div class="arrow"></div>Los nombres no son válidos, por favor ingrésalos nuevamente</div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-column">
                            <label for="">*Apellido paterno</label>
                            <?php echo form_input($data_apellido_paterno); ?>
                            <div class="validacion apellido_paterno"><div class="arrow"></div>El apellido paterno no es válido, por favor ingréselo nuevamente</div>
                        </div>
                        <div class="form-relleno"></div>
                        <div class="form-column">
                            <label for="">*Apellido materno</label>
                            <?php echo form_input($data_apellido_materno); ?>
                            <div class="validacion apellido_materno"><div class="arrow"></div>El apellido materno no es válido, por favor ingréselo nuevamente</div>
                        </div>
                    </div>

                    <div class="form-row">

                        <div class="form-column">
                            <label for="">*Renta líquida</label>
                            <select class="" name="renta_liquida">
                                <option value="">Seleccione Renta</option>';
                                <?php foreach($result as $each){ ?>
                                <option value="<?php echo $each['id_renta']; ?>"><?php echo $each['renta']; ?></option>';
                                <?php } ?>
                            </select>
                            <div class="validacion renta_liquida"><div class="arrow"></div>La renta líquida no es válida, por favor ingrésala nuevamente</div>
                        </div>
                        <div class="form-relleno"></div>
                        <div class="form-column">
                            <label for="">*Teléfono de contacto 1</label>
                            <?php echo form_input($data_telefono1); ?>
                            <span>Ej Fijo: 2-24330222 o Cel: 9-9654785</span>
                            <div class="validacion telefono_1"><div class="arrow"></div>El teléfono de contacto 1 no es válido, por favor ingréselo nuevamente</div>
                        </div>
                    </div>

                <div class="form-row">

                    <div class="form-column">
                        <label for="">Teléfono de contacto 2</label>
                        <?php echo form_input($data_telefono2); ?>
                        <span>Ej Fijo: 2-24330222 o Cel: 9-9654785</span>
                        <div class="validacion telefono_2">
                            <div class="arrow"></div>El teléfono de contacto 2 no es válido, por favor ingréselo nuevamente</div>
                    </div>
                    <div class="form-relleno"></div>
                    <div class="form-column">
                        <label for="">*Email</label>
                        <?php echo form_input($data_email); ?>
                        <div class="validacion email">
                            <div class="arrow"></div>
                        El email no es válido, por favor ingréselo nuevamente</div>
                    </div>

                </div>

                <div class="form-row">

                    <div class="form-column">
                        <label for="">*Corfirmar email</label>
                        <?php echo form_input($data_confirmar_email); ?>
                        <div class="validacion confirmar_email">
                            <div class="arrow"></div>
                        El email no es válido, por favor ingréselo nuevamente</div>
                    </div>
                    <div class="form-relleno"></div>
                    <div class="form-column">
                        <label for="">*Rut ejecutivo alianza</label>
                        <?php echo form_input($data_rut_ejecutivo); ?>
                        <span>Ej: 1234567-8</span>
                        <div class="validacion rut_ejecutivo">
                            <div class="arrow"></div>
                        El Rut no es válido, por favor ingréselo nuevamente</div>
                    </div>

                </div>

                <div class="button">
                    <?php
                    echo form_submit('submit', 'Enviar', "class='txt-button' ");
                    ?>
                </div>




                    <?php echo form_close(); ?>
                </div>

            </div>
        </div></div>
        <div class="footer formulario"></div>
        <script type="text/javascript" src="<?php echo base_url("public/js/jquery-1.7.1.min.js"); ?>"></script>
        <script type="text/javascript" src="<?php echo base_url("public/js/keypress.js"); ?>"></script>
        <script type="text/javascript" src="<?php echo base_url("public/js/jquery.Rut.min.js"); ?>"></script>
        <script type="text/javascript" src="<?php echo base_url("public/js/views/formulario.js"); ?>"></script>
    </body>

    </html>
