<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Reporte extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('Reporte_model');
        $this->load->helper('url');
    }

    public function index() {

        $attributes = array(
                "class" => "",
                "name" => "contactform",
                "id" => "formProntus"
            );

            $data_fecha1 = array(
                'name' => 'fecha1',
                'id' => 'fecha1',
                'placeholder' => '00 / 00 / 0000',
                'class' => '',
                'autocomplete' => 'off',
                'readonly' => 'true'

            );

            $data_fecha2 = array(
                'name' => 'fecha2',
                'id' => 'fecha2',
                'placeholder' => '00 / 00 / 0000',
                'class' => '',
                'autocomplete' => 'off',
                'readonly' => 'true'

            );

        $data['attributes']=$attributes;
        $data['data_fecha1']=$data_fecha1;
        $data['data_fecha2']=$data_fecha2;

        $this->load->view('Reporte/index',$data);


    }

    public function generar_reporte(){
        // recibir datos
        $data = array(
            'fecha1' => $this->input->post('fecha1'),
            'fecha2' => $this->input->post('fecha2')
        );
        // limpiar fecha

        if(empty($data['fecha2'])){
           // $data['fecha2']=date("Y-m-d H:i:s");
            $data['fecha2']=date("d/m/Y");
        }

        $fecha1 = explode('/',$this->input->post('fecha1'));
        $data['fecha1'] = $fecha1[2].'-'.$fecha1[1].'-'.$fecha1[0].' 00:00:00';

        $fecha2 = explode('/',$data['fecha2']);
        $data['fecha2'] = $fecha2[2].'-'.$fecha2[1].'-'.$fecha2[0].' 23:59:59';

        // realizar busqueda - 2016-01-01 00:00:00
        $result=$this->Reporte_model->get_reporte_excel($data);


        // excel
        $this->load->library('excel');

        $this->excel->setActiveSheetIndex(0);
        $this->excel->getActiveSheet()->setTitle('reporte');

        // unir celdas para crear la cabecera
        $this->excel->getActiveSheet()->mergeCells('A1:B1');
        $this->excel->getActiveSheet()->mergeCells('C1:J1');

        //cambiar color de la celda
        $this->excel->getActiveSheet()->getStyle('A1')->getFill()->applyFromArray(array(
            'type' => PHPExcel_Style_Fill::FILL_SOLID,
            'startcolor' => array(
                'rgb' => '002566'
            )
        ));
        // cambiar tamaño cabecera
        $this->excel->getActiveSheet()->getRowDimension('1')->setRowHeight(60);

        //agregar la imagen
        $logo = './public/img/desktop-logo-header.png';
        $objDrawing = new PHPExcel_Worksheet_Drawing();
        $objDrawing->setName('Customer Signature');
        $objDrawing->setDescription('Customer Signature');
        $objDrawing->setPath($logo);
        $objDrawing->setOffsetX(10);
        $objDrawing->setOffsetY(15);
        $objDrawing->setCoordinates('A1');             //set image to cell E38
      //  $objDrawing->setHeight(38);                     //signature height
        $objDrawing->setWidth(212);
        $objDrawing->setWorksheet($this->excel->getActiveSheet());  //save

        //agregar la imagen travel
        $logo = './public/img/desktop-travel-sky.png';
        $objDrawing = new PHPExcel_Worksheet_Drawing();
        $objDrawing->setName('Customer Signature');
        $objDrawing->setDescription('Customer Signature');
        $objDrawing->setPath($logo);
        $objDrawing->setOffsetX(-10);
        $objDrawing->setOffsetY(15);
        $objDrawing->setCoordinates('I1');             //set image to cell E38
        $objDrawing->setWidth(247);
        $objDrawing->setWorksheet($this->excel->getActiveSheet());  //save

        //$this->excel->getActiveSheet()->getHeaderFooter()->addImage($objDrawing, PHPExcel_Worksheet_HeaderFooter::IMAGE_HEADER_LEFT);


        //cambiar width columnas
        $this->excel->getActiveSheet()->getColumnDimension('A')->setWidth(15);
        $this->excel->getActiveSheet()->getColumnDimension('B')->setWidth(20);
        $this->excel->getActiveSheet()->getColumnDimension('C')->setWidth(20);
        $this->excel->getActiveSheet()->getColumnDimension('D')->setWidth(20);
        $this->excel->getActiveSheet()->getColumnDimension('E')->setWidth(25);
        $this->excel->getActiveSheet()->getColumnDimension('F')->setWidth(20);
        $this->excel->getActiveSheet()->getColumnDimension('G')->setWidth(20);
        $this->excel->getActiveSheet()->getColumnDimension('H')->setWidth(25);
        $this->excel->getActiveSheet()->getColumnDimension('I')->setWidth(15);
        $this->excel->getActiveSheet()->getColumnDimension('J')->setWidth(20);

        // TEXTO HACIA LA IZQUIERDA
        $this->excel->getActiveSheet()->getStyle('A')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_LEFT);
        $this->excel->getActiveSheet()->getStyle('B')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_LEFT);
        $this->excel->getActiveSheet()->getStyle('C')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_LEFT);
        $this->excel->getActiveSheet()->getStyle('D')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_LEFT);
        $this->excel->getActiveSheet()->getStyle('E')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_LEFT);
        $this->excel->getActiveSheet()->getStyle('F')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_LEFT);
        $this->excel->getActiveSheet()->getStyle('G')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_LEFT);
        $this->excel->getActiveSheet()->getStyle('H')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_LEFT);
        $this->excel->getActiveSheet()->getStyle('I')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_LEFT);
        $this->excel->getActiveSheet()->getStyle('J')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_LEFT);


        $fields = $result->list_fields();
        $col = 0;
        foreach ($fields as $field){
            $this->excel->getActiveSheet()->setCellValueByColumnAndRow($col, 2, $field);
            $col++;
        }

        $row = 3;
        foreach($result->result() as $data){
            $col = 0;
            foreach ($fields as $field){
                $this->excel->getActiveSheet()->setCellValueByColumnAndRow($col, $row, $data->$field);
                $col++;
            }
            $row++;
        }

        $filename='reporte.xls'; //save our workbook as this file name

        header('Content-Type: application/vnd.ms-excel'); //mime type
        header('Content-Disposition: attachment;filename="'.$filename.'"'); //tell browser what's the file name
        header('Cache-Control: max-age=0'); //no cache
        $objWriter = PHPExcel_IOFactory::createWriter($this->excel, 'Excel5');
        $objWriter->save('php://output');

    }

}
