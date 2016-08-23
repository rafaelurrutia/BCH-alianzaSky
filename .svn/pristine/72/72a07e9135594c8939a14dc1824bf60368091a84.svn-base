<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Renta_liquida_model extends CI_Model {

    protected $table = 'renta_liquida';

    function __construct() {
        parent::__construct();

    }

    public function get_renta_liquida() {

        $query = $this->db->query('SELECT id_renta,renta FROM renta_liquida');
        $data = $query->result_array();
        return $data;

    }

}
