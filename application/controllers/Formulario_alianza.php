<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Formulario_alianza extends CI_Controller {

    public function __construct(){

        parent::__construct();
        $this->load->model('Renta_liquida_model');
        $this->load->model('Formulario_alianza_model');
        $this->load->driver('session');
    }

    public function index(){

        $attributes = array(
            "class" => "form-horizontal",
            "name" => "contactform",
            "id" => "formProntus",
            "onsubmit" =>"return enviaForm(); "
        );

        $data_rut_cliente = array(
            'name' => 'rut',
            'id' => 'rut',
            'autocomplete' => 'off',
            'maxlength' => '13'
        );

        $data_nombres = array(
            'name' => 'nombres',
            'id' => 'nombres',
            'autocomplete' => 'off'
        );

        $data_apellido_paterno = array(
            'name' => 'apellido_paterno',
            'id' => 'apellido_paterno',
            'autocomplete' => 'off'
        );

        $data_apellido_materno = array(
            'name' => 'apellido_materno',
            'id' => 'apellido_materno',
            'autocomplete' => 'off'
        );

        $data_telefono1 = array(
            'name' => 'telefono1',
            'id' => 'telefono1',
            'autocomplete' => 'off',
            'maxlength' => '11'
        );

        $data_telefono2 = array(
            'name' => 'telefono2',
            'id' => 'telefono2',
            'autocomplete' => 'off',
            'maxlength' => '11'
        );

        $data_checkbox_celular = array(
            'name' => 'fono_movil',
            'id' => 'fono_movil',
            'autocomplete' => 'off'
        );

        $data_email = array(
            'name' => 'email',
            'id' => 'email'
        );

        $data_confirmar_email = array(
            'name' => 'confirmar_email',
            'id' => 'confirmar_email',
            'autocomplete' => 'off'
        );

        $data_rut_ejecutivo = array(
            'name' => 'rut_ejecutivo',
            'id' => 'rut_ejecutivo',
            'autocomplete' => 'off',
            'maxlength' => '13'
        );

        $data['attributes']=$attributes;

        $data['data_rut_cliente']=$data_rut_cliente;
        $data['data_nombres']=$data_nombres;

        $data['data_apellido_paterno']=$data_apellido_paterno;
        $data['data_apellido_materno']=$data_apellido_materno;

        $result = $this->Renta_liquida_model->get_renta_liquida();
        $data['result'] = $result;
        $data['data_telefono1']=$data_telefono1;

        $data['data_telefono2']=$data_telefono2;
        $data['data_email']=$data_email;

        $data['data_confirmar_email']=$data_confirmar_email;
        $data['data_rut_ejecutivo']=$data_rut_ejecutivo;

        $this->load->view('Formulario_alianza/index',$data);
    }

    public function error(){
        $this->load->view('Formulario_alianza/error');
    }

    public function post_formulario_alianza(){

        date_default_timezone_set("Chile/Continental");

        $data = array(
            'rut_cliente' => $this->input->post('rut'),
            'nombres' => $this->input->post('nombres'),
            'apellido_paterno' => $this->input->post('apellido_paterno'),
            'apellido_materno' => $this->input->post('apellido_materno'),
            'id_renta'=> $this->input->post('renta_liquida'),
            'telefono_1'=> $this->input->post('telefono1'),
            'telefono_2'=> $this->input->post('telefono2'),
            'email'=> $this->input->post('email'),
            'rut_ejecutivo'=> $this->input->post('rut_ejecutivo'),
            'fecha_registro' => date_create()->format('Y-m-d H:i:s')
        );

        //var_dump($data);

        $this->load->library('form_validation');
        $this->form_validation->set_rules('rut', 'Rut', 'required|trim',
                                          array('required' => '%s de cliente erroneo.'));
        $this->form_validation->set_rules('nombres','Nombre','required|trim',
                                          array('required' => '%s de cliente erroneo.'));
        $this->form_validation->set_rules('apellido_paterno','Apellido paterno','required|trim',
                                          array('required' => '%s de cliente erroneo.'));
        $this->form_validation->set_rules('apellido_materno','Apellido materno','required|trim',
                                          array('required' => '%s de cliente erroneo.'));
        $this->form_validation->set_rules('renta_liquida','Renta líquida','required',
                                          array('required' => '%s de cliente erroneo.'));
        $this->form_validation->set_rules('telefono1','Teléfono 1','required|trim',
                                          array('required' => '%s de cliente erroneo.'));
        $this->form_validation->set_rules('email','Email','required|trim|valid_email',
                                          array('required' => '%s de cliente erroneo.',
                                                'valid_email' => '%s de cliente invalido.'));

        if ($this->form_validation->run() == TRUE){
            $this->Formulario_alianza_model->set_formulario_alianza($data);
            $this->load->view('Formulario_alianza/exito');
        }
        else{
            $errors = validation_errors();
            echo json_encode($errors);
            redirect('error');
        }

    }

    public function rut($rut){

        if(strpos($rut,"-")==false){
            $RUT[0] = substr($rut, 0, -1);
            $RUT[1] = substr($rut, -1);
        }else{
            $RUT = explode("-", trim($rut));
        }
        $elRut = str_replace(".", "", trim($RUT[0]));
        $factor = 2;
        for($i = strlen($elRut)-1; $i >= 0; $i--):
        $factor = $factor > 7 ? 2 : $factor;
        $suma += $elRut{$i}*$factor++;
        endfor;
        $resto = $suma % 11;
        $dv = 11 - $resto;
        if($dv == 11){
            $dv=0;
        }else if($dv == 10){
            $dv="k";
        }else{
            $dv=$dv;
        }
        if($dv == trim(strtolower($RUT[1]))){
            return true;
        }else{
            return false;
        }

    }

}
