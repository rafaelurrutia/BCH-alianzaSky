<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('Login_model');
        $this->load->driver('session');
    }

    public function index() {

        $attributes = array(
            "class" => "form-horizontal",
            "name" => "contactform",
            "id" => "formProntus",
            "onsubmit" =>"return enviaForm(); "
        );

        $data_usuario = array(
            'name' => 'usuario',
            'id' => 'usuario',
            'class' => '',
            'autocomplete' => 'off'
        );

        $data_contrasena = array(
            'name' => 'contrasena',
            'id' => 'contrasena',
            'type' => 'password',
            'class' => '',
            'autocomplete' => 'off'
        );

        $data['attributes']=$attributes;

        $data['data_usuario']=$data_usuario;
        $data['data_contrasena']=$data_contrasena;

        $this->load->view('Login/index',$data);
    }

    public function logout(){
//        session_destroy();
        $this->session->sess_destroy();
    }

    public function login(){

        $this->load->library('form_validation');
        $this->form_validation->set_rules('usuario', 'Usuario', 'required',array('required' => '%s erroneo.'));
        $this->form_validation->set_rules('contrasena','Contraseña','required',array('required' => '%s erroneo.'));

        if ($this->form_validation->run() == TRUE){

            $usuario=$this->input->post('usuario');
            $contrasena=$this->input->post('contrasena');


            if($this->Login_model->get_login($usuario, $contrasena)){

                //$this->load->view('Reporte/index');

                $returnedData = array(
                    'status' => true,
                    'url' => 'reporte/'
                );

                $this->session->set_userdata('user',$usuario);

                $_SESSION[session_id().'_usuario_status']='logged';

                $jsonData = json_encode($returnedData);
                echo $jsonData;


            }else{

                $returnedData = array(
                    'status' => false
                );
                $jsonData = json_encode($returnedData);
                echo $jsonData;

            }

        }
        else{

            $returnedData = array(
                    'status' => false
                );
                $jsonData = json_encode($returnedData);
                echo $jsonData;


        }

    }

}
