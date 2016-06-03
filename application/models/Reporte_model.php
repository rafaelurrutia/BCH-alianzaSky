<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Reporte_model extends CI_Model {

    protected $columna = 'formulario_alianza.fecha_registro';

    function __construct() {
        parent::__construct();

    }

    public function get_reporte_excel($data) {

        $this->db->select(' formulario_alianza.rut_cliente as "Rut cliente",
                            formulario_alianza.nombres as "Nombres",
                            formulario_alianza.apellido_paterno as "Apellido paterno",
                            formulario_alianza.apellido_materno as "Apellido materno",
                            renta_liquida.renta as "Renta líquida",
                            formulario_alianza.telefono_1 as "Teléfono 1",
                            formulario_alianza.telefono_2 as "Teléfono 2",
                            formulario_alianza.email as "Email",
                            formulario_alianza.rut_ejecutivo as "Rut ejecutivo",
                            formulario_alianza.fecha_registro as "Fecha registro"');
        $this->db->from('formulario_alianza');
        $this->db->join(' renta_liquida',
                        'renta_liquida.id_renta = formulario_alianza.id_renta', 'INNER');
        $this->db->where($this->columna.'<=',$data['fecha2']);
        $this->db->where($this->columna.'>=',$data['fecha1']);

        $result = $this->db->get();

        if(!$result)
            return false;

        return $result;

    }

}
