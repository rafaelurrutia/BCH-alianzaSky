<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Formulario_alianza_model extends CI_Model {

    protected $table = 'formulario_alianza';

    function __construct() {
        parent::__construct();

    }

    public function set_formulario_alianza($data) {

        $fields= array(
            'rut_cliente'=>$data['rut_cliente'],
            'nombres'=>$data['nombres'],
            
            'apellido_paterno'=>$data['apellido_paterno'],
            'apellido_materno'=>$data['apellido_materno'],
            
            'id_renta'=>$data['id_renta'],
            'telefono_1'=>$data['telefono_1'],
            
            'telefono_2'=>$data['telefono_2'],
            'email'=>$data['email'],
            
            'rut_ejecutivo'=>$data['rut_ejecutivo'],
            'fecha_registro'=>$data['fecha_registro']
        );

        $this->db->insert($this->table,$fields);

    }

}
