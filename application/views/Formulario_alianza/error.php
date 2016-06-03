<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="format-detection" content="telephone=no">
        <title>Login</title>
        <link rel="stylesheet" type="text/css" href="<?php echo base_url("public/css/main.css"); ?>">
        <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,700' rel='stylesheet' type='text/css'>

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
            </div>
            <div class="image-triangle exito">
                <img src="<?php echo base_url("public/img/desktop-triangulo-blanco.png"); ?>" alt="">
            </div>
            <div class="image-travel">
                <img src="<?php echo base_url("public/img/desktop-travel-sky.png"); ?>" alt="">
            </div>
            <div class="contenedor exito">

                <div class="formulario">

                        <div class="datos-error">
                            Error de ingreso
                        </div>

                        <div class="button">
                         <input type="submit" value="Volver" onclick="window.history.back()">
                        </div>


                </div>

            </div>
        </div>
        <div class="footer"></div>

    </body>

    </html>
