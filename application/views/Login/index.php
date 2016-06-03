<?php
defined('BASEPATH') OR exit('No direct script access allowed');
//session_destroy();

?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="format-detection" content="telephone=no">
        <title>Login</title>
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

        <div class="login">
            <div class="text">
                <h1 class="fg-white">Venta referidos Sky</h1>
                <h2 class="fg-white">Descarga de registrados</h2>
            </div>
            <div class="image-triangle">
                <img src="<?php echo base_url("public/img/desktop-triangulo-blanco.png"); ?>" alt="">
            </div>
            <div class="image-travel">
                <img src="<?php echo base_url("public/img/desktop-travel-sky.png"); ?>" alt="">
            </div>
            <div class="contenedor">

                <div class="formulario">
                    <?php
                echo form_open("Login/login", $attributes);
                ?>

                        <div class="form-row">
                            <div class="form-column">
                                <label for="">Usuario</label>
                                <?php echo form_input($data_usuario); ?>
                                    <div class="validacion usuario">
                                        <div class="arrow">

                                        </div>El usuario no es válido, por favor ingréselo nuevamente</div>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-column">
                                <label for="">Contraseña</label>
                                <?php echo form_input($data_contrasena); ?>
                                    <div class="validacion contrasena">
                                        <div class="arrow">

                                        </div>La contraseña no es válida, por favor ingrésala nuevamente</div>
                            </div>
                        </div>

                        <div class="datos-invalidos">
                            Usuario y/o contraseña inválidas, por favor ingrésalas nuevamente
                        </div>



                        <div class="button">
                            <?php
                    echo form_submit('submit', 'Entrar', "class='txt-button' ");
                    ?>
                        </div>

                        <?php echo form_close(); ?>
                </div>

            </div>
        </div>
        <div class="footer"></div>
        <script>
            var url_reporte="<?php  echo site_url('reporte'); ?>";
            var csrf_token_name="<?php echo $this->security->get_csrf_token_name(); ?>";
            var get_csrf_hash="<?php echo $this->security->get_csrf_hash(); ?>";
        </script>
        <script type="text/javascript" src="<?php echo base_url("public/js/jquery-1.7.1.min.js"); ?>"></script>
        <script type="text/javascript" src="<?php echo base_url("public/js/keypress.js"); ?>"></script>
        <script type="text/javascript" src="<?php echo base_url("public/js/views/login.js"); ?>"></script>

    </body>

    </html>
