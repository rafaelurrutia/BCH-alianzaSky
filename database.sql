create database banco_alianza;

CREATE TABLE IF NOT EXISTS login_alianza (
    id int(11) NOT NULL AUTO_INCREMENT,
    usuario varchar(255) NOT NULL,
    contrasena varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

insert into login_alianza (usuario,contrasena) values ('fusiona', MD5('fusiona'));



CREATE TABLE IF NOT EXISTS renta_liquida (
    id_renta int(11) NOT NULL AUTO_INCREMENT,
    renta varchar(255) NOT NULL,
    PRIMARY KEY (id_renta)
);

insert into renta_liquida (renta) values ('Estudiante');
insert into renta_liquida (renta) values ('Menor $400.000');
insert into renta_liquida (renta) values ('Entre $400.000 y $500.000');
insert into renta_liquida (renta) values ('$500.000 y $650.000');
insert into renta_liquida (renta) values ('$650.000 y $1.000.000');
insert into renta_liquida (renta) values ('$1.000.000 y $1.650.000');
insert into renta_liquida (renta) values ('$1.650.000 y $3.000.000');
insert into renta_liquida (renta) values ('Mayor a $3.000.000');


CREATE TABLE IF NOT EXISTS formulario_alianza (
    id_formulario int(11) NOT NULL AUTO_INCREMENT,
    id_renta int(11) NOT NULL,

    rut_cliente varchar(10) NOT NULL,
    nombres varchar(200) NOT NULL,
    apellido_paterno varchar(200) NOT NULL,
    apellido_materno varchar(200) NOT NULL,
    telefono_1 varchar(20) NOT NULL,
    telefono_2 varchar(20),
    email varchar(200) NOT NULL,
    rut_ejecutivo varchar(10),
    fecha_registro DATETIME,

    PRIMARY KEY(id_formulario),
    INDEX (id_renta),
    FOREIGN KEY (id_renta) REFERENCES renta_liquida(id_renta)
);

insert into formulario_alianza (
    rut_cliente,
    nombres,
    apellido_paterno,
    apellido_materno,
    id_renta,
    telefono_1,
    telefono_2,
    email,
    rut_ejecutivo,
    fecha_registro

) values (
    '15695795-k',
    'rafael',
    'urrutia',
    'humire',
    '1',
    '123',
    '',
    'aaa@aaa.aaa',
    '1-9',
    '2015-07-05 16:15:00'
);

insert into formulario_alianza (
    rut_cliente,
    nombres,
    apellido_paterno,
    apellido_materno,
    id_renta,
    telefono_1,
    telefono_2,
    email,
    rut_ejecutivo,
    fecha_registro

) values (
    '1-9',
    'hector',
    'muñoz',
    'gamboa',
    '1',
    '123',
    '',
    'aaa@aaa.aaa',
    '1-9',
    '2015-03-03 16:15:00'
);
