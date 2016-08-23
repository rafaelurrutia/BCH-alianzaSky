<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login_model extends CI_Model {

    protected $tabla = 'login_alianza';

    function __construct() {
        parent::__construct();
        $this->load->helper('url');
    }

    public function get_login($name, $password) {

        $password = md5($password);
        $this->db->from($this->tabla);
        $this->db->where('usuario',$name);
        $this->db->where('contrasena',$password);
        $query = $this->db->get();

        if($query->num_rows()==1){

            foreach ($query->result() as $row){
                $data = array(
                    'username'=> $row->usuario,
                    'logged_in'=>TRUE
                );
            }
          //  $this->session->set_userdata($data);
            return TRUE;
        }else{

            return FALSE;


        }

    }

}
