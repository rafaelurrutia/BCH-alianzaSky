//<!--
//--------------------------------------------------------------------
//--------------------------COMENTARIO GLOBAL-------------------------
//--------------------------------------------------------------------
// PROPOSITO
//-----------
// Implementa funciones de validacion para tipos de datos.
// Valida los tipos de datos : TEXTO, EMAIL, RANGO, RUT,
// cantidad MAXIMA Y MINIMA DE CARACTERES, NUMERO, APHA Y
// OBLIGATORIEDAD
//--------------------------------------------------------------------
// HISTORIAL DE VERSIONES
//------------------------
// 1.00 - 17/05/2005 - AMU - Primera Version
// 2.00 - 18/05/2005 - GFD - Segunda Version.
// 2.01 - 26/05/2005 - GFD - Soluciona bug de validacion en "numero".
// 2.02 - 26/05/2005 - GFD - Soluciona bug de validacion en "numero".
// 2.03 - 31/05/2005 - GFD - Agrega funcion que valida fecha
// 2.04 - 03/06/2005 - GFD - Soluciona bug de validacion de numero Float
// 2.05 - 29/06/2005 - GFD - Soluciona bug de validacionde numero saca puntos
// 3.00 - 23/08/2005 - GFD -
// 4.00 - 10/02/2006 - GFD - Agrega validaciones condicionales , validaciones is y notIs para comparar contra valor especifico un control , add internal method condition
// 4.01 - 16/05/2006 - GFD - Extiende validacion obligatorio para conjunto de radio de un elemento
// 4.02 - 06/06/2006 - GFD - Cambia parametros de validacion regex a objeto REGEXP
// 4.03 - 28/03/2007 - YCH - Agrega la coma como caracter permitido en la validacion de texto.
// -------------------------------------------------------------------



// Funcion que valida la obligatoriedad de contenido
function obligatorio(control,args){
  var dato = '';
  if(control.type){
    if ((control.type == 'text') || (control.type == 'textarea') || (control.type == 'file') || (control.type == 'password') || (control.type == 'hidden')){
      dato = control.value;
    }else if (control.type == 'select-one'){
      dato = control.options[control.selectedIndex].value;
    }else if(control.type == 'checkbox'){
       if(control.checked){
         dato = 1;
       };
    }else if(control.type == 'radio'){
       if(control.checked){
         dato = 1;
       };
     };
  }else{
     if(control[0].type == 'radio'){
       var i = 0;
       for(i=0;i<control.length;i++){
         if(control[i].checked){
           dato = 1;
         };
       };
    }else{
      alert('Obligatorio: validation dont work with type of field form.');
      return;
    };
  };
  if (dato == ''){
    return false;
  }else{
    return true;
  };
};

// Funcion que valida una direccion de e-mail
// no verifica obligatoriedad
function email(control,args){
  var dato;
  if ((control.type == 'text') || (control.type == 'password') || (control.type == 'hidden')){
     dato = control.value;
  }else if (control.type == 'select-one'){
     dato = control.options[control.selectedIndex].value;
  }else{
    alert('Email: validation dont work with type of field form.');
    return;
  };
  if(dato != ''){
    var expr = /^[a-zA-Z][a-zA-Z\_\-\.0-9]+@[a-zA-Z\-\.0-9]+\.[a-zA-Z]{2,4}$/;
    var found = expr.exec(dato);
    if (! found){
      return false;
    }else{
      return true;
    };
  }else{
    return true;
  };
};

// Funcion para validar un numero entre un rango determinado
// no verifica obligatoriedad
function rango(control, param){
  var args = new Array;
  args = param.split(",");
  var number;
  if ((control.type == 'text') || (control.type == 'password') || (control.type == 'hidden')){
     number = control.value;
  }else if (control.type == 'select-one'){
     number = control.options[control.selectedIndex].value;
  }else{
    alert('Rango: validation dont work with type of field form.');
    return;
  };
  if(number != ''){
    var num = parseFloat(number);
    if(isNaN(num)){
      return false;
    };
    if ((args[0] != '') && (args[1] != '')){
      if ((num >= parseFloat(args[0])) && (num <= parseFloat(args[1]))){
        return true;
      }else{
        return false;
      };
    }else if((args[0] == '') && (args[1] != '')){
      if (num <= parseFloat(args[1])){
        return true;
      }else{
        return false;
      };
    }else if((args[0] != '') && (args[1] == '')){
       if (num >= parseFloat(args[0])){
         return true;
       }else{
         return false;
       };
    };
  }else{
    return true;
  };
};


// Funcion que valida solo alfabeto
// no verifica obligatoriedad
function alpha(control,args){
  var dato;
  if ((control.type == 'text') ||  (control.type == 'password') || (control.type == 'hidden')){
     dato = control.value;
  }else if (control.type == 'select-one'){
     dato = control.options[control.selectedIndex].value;
  }else{
    alert('alpha: validation dont work with type of field form.');
    return;
  };
  if (dato != ''){
    var expr = /[^a-zA-ZÒ—·ÈÌÛ˙‰ÎÔˆ¸¡…Õ”⁄ƒÀœ÷‹]/;
    if (dato.match(expr)){
      return false;
    }else{
      return true;
    };
  }else{
    return true;
  };
};

// Funcion que valida alphabeto y numeros
// no verifica obligatoriedad
function alphanum(control,args){
  var dato;
  if ((control.type == 'text') || (control.type == 'password') || (control.type == 'hidden')){
     dato = control.value;
  }else if (control.type == 'select-one'){
     dato = control.options[control.selectedIndex].value;
  }else{
    alert('alphanum: validation dont work with this type of field form.');
    return;
  };
  if (dato != ''){
    var expr = /[^0-9a-zA-ZÒ—·ÈÌÛ˙‰ÎÔˆ¸¡…Õ”⁄ƒÀœ÷‹]/;
    if (dato.match(expr)){
      return false;
    }else{
      return true;
    };
  }else{
    return true;
  };
};

// Funcion que valida TEXTO
// no verifica obligatoriedad
function texto(control,args){
  var dato;
  if ((control.type == 'text') ||  (control.type == 'password') || (control.type == 'hidden')){
     dato = control.value;
  }else if (control.type == 'select-one'){
     dato = control.options[control.selectedIndex].value;
  }else{
    alert('texto: validation dont work with this type of field form.');
    return;
  };
  if (dato != ''){
  var expr = /[^0-9a-zA-ZÒ—·ÈÌÛ˙‰ÎÔˆ¸¡…Õ”⁄ƒÀœ÷‹\-\'\.\ \,]/;
    if (dato.match(expr)){
      return false;
    }else{
      return true;
    };
  }else{
    return true;
  };
};

// Funcion que valida un numero
// no verifica obligatoriedad
function numero(control,args){
  var dato;
  if ((control.type == 'text') || (control.type == 'password') || (control.type == 'hidden')){
     dato = control.value;
  }else if (control.type == 'select-one'){
     dato = control.options[control.selectedIndex].value;
  }else{
    alert('numero: validation dont work with type of field form.');
    return;
  };
  if (dato != ''){
    if(args == ''){
      var expr = /^[0-9]+$/;
      dato = dato.replace(/\./g,'');
      var found = expr.exec(dato);
      if (! found){
        return false;
      }else{
        return true;
      };
    }else{
      var params = args.split(',');
      // params 0=parte entera , 1=decimal  ,2=separador(punto o coma)
      if(params[2] == ''){params[2] = ',';};
      var numero = dato.split(params[2]);
      numero[0] = numero[0].replace(/\./g,'');
      if(params.length != 3){
        alert('numero: number of parameters not valid.');
        return false;
      };
      if ((isNaN(parseInt(params[0]))) || (isNaN(parseInt(params[1])))){
        alert('numero: not valid parameters.');
        return false;
      };
     if(numero.length == '1'){
         var expr = /^[0-9]+$/;
         var found = expr.exec(numero[0]);
        if (! found){
          return false;
        };
        if(numero[0].length <= parseInt(params[0])){
          return true;
        }else{
          return false;
        };
     }else{
         var expr = /^[0-9]+$/;
         var found0 = expr.exec(numero[0]);
         var found1 = expr.exec(numero[1]);
        if ((!found0) || (!found1)){
          return false;
        };
        if((numero[0].length <= parseInt(params[0])) && (numero[1].length <= parseInt(params[1]))){
          return true;
        }else{
          return false;
        };
     };
    };
  }else{
    return true;
  };
};


// Funcion que restringe la cantidad maxima de caracteres permitidos.
// no verifica obligatoriedad
function cmaximo(control,args){
  var dato;
  if ((control.type == 'text') || (control.type == 'password') || (control.type == 'hidden') || (control.type == 'textarea')){
     dato = control.value;
  }else if (control.type == 'select-one'){
     dato = control.options[control.selectedIndex].value;
  }else{
    alert('cmaximo: validation dont work with type of field form.');
    return;
  };
  if (dato != ''){
    var cant = parseInt(args);
    if(isNaN(cant)){
      alert('cmaximo: parameter is not valid.');
      return false;
    };
    if (dato.length > cant){
      return false;
    }else{
      return true;
    };
  }else{
    return true;
  };
};

// Funcion que restringe la cantidad minima de caracteres permitidos.
// no verifica obligatoriedad
function cminimo(control,args){
  var dato;
  if ((control.type == 'text') ||  (control.type == 'password') || (control.type == 'hidden') || (control.type == 'textarea')){
     dato = control.value;
  }else if (control.type == 'select-one'){
     dato = control.options[control.selectedIndex].value;
  }else{
    alert('cminimo: validation dont work with type of field form.');
    return;
  };
  if (dato != ''){
    var cant = parseInt(args);
    if(isNaN(cant)){
      alert('cminimo: parameter is not valid.');
      return false;
    };
    if (dato.length < cant){
      return false;
    }else{
      return true;
    };
  }else{
    return true;
  };
};

// Funcion que valida el cumplimiento del valor sobre una exprecion regular definida
// no verifica obligatoriedad
// 2.00 cambio argumento a objeto RegExp
function regex(control,args){
  var dato;
  if ((control.type == 'text') || (control.type == 'textarea') || (control.type == 'file') || (control.type == 'password') || (control.type == 'hidden')){
     dato = control.value;
  }else if (control.type == 'select-one'){
     dato = control.options[control.selectedIndex].value;
  }else{
    alert('regex: validation dont work with this type of field form.');
    return;
  };
  if (dato != ''){
   try{
      var expr = args; // 4.02
    }catch(e){
       alert('[lib_validator]Error: '+e)
    }
    if (dato.match(expr)){
      return true;
    }else{
      return false;
    };
  }else{
    return true;
  };
};

// 2.03 Funcion que valida que fecha sea valida
// no verifica obligatoriedad
function fecha(control,args){
  var dato;
  if ((control.type == 'text') || (control.type == 'textarea') || (control.type == 'file') || (control.type == 'password') || (control.type == 'hidden')){
     dato = control.value;
  }else if (control.type == 'select-one'){
     dato = control.options[control.selectedIndex].value;
  }else{
    alert('fecha: validation dont work with this type of field form.');
    return;
  };
  if (dato != ''){
  var reg = '';
  var mifecha2 = '';
     if(args == ''){
       reg = /(\d\d)\/(\d\d)\/(\d\d\d\d)$/i;
       mifecha2 = dato.replace(reg,"$3/$2/$1");
    }else{
      // Este trozo esta a prueba ya que la idea es que maneje multiples formatos.
      // Lo hare cuando tenga m·s tiempo.
      try{
         reg = eval(args);
      }catch(e){
        alert('[lib_validator]Error: '+e)
      }
       mifecha2 = dato.replace(reg,"$3/$2/$1");
    };
    var mifecha = new Date(mifecha2);
    var dia = new String(mifecha.getDate());
    if(dia.length == 1) dia = '0'+dia;
    var mes = new String(mifecha.getMonth() + 1);
    if(mes.length == 1) mes = '0'+mes;
    var anio = new String(mifecha.getFullYear());
    var newfecha = dia+'/'+mes+'/'+anio;
    if (dato != newfecha) {
      return false;
    }else{
      return true;
    };
  }else{
    return true;
  };
};



// Funcion que valida que un valor no sea selecionado
function dontselect(control,args){
  var dato;
  if (control.type == 'select-one'){
     dato = control.options[control.selectedIndex].value;
  }else{
    alert('dontselect: validation dont work with type of field form.');
    return;
  };
  if(dato != ''){
	if (dato == args){
      return false;
    }else{
      return true;
    };
  }else{
    return true;
  };
};


// Funcion que valida un RUT segun el algoritmo
// no verifica obligatoriedad
function rut(control,args){
    var dato;
  if ((control.type == 'text') ||  (control.type == 'password') || (control.type == 'hidden')){
     dato = control.value;
  }else if (control.type == 'select-one'){
     dato = control.options[control.selectedIndex].value;
  }else{
    alert('cmaximo: validation dont work with type of field form.');
    return;
  };
  if (dato != ''){
      if (!validate_rut(dato)){
        return false;
      }else{
        return true;
      };
  }else{
    return true;
  };
};

// Algoritmo RUT
function validate_rut(crut) {
  var tmpstr = "";
  var i, largo, dv, rut, dv, suma, mul, res, dvi;

  for ( i=0; i < crut.length ; i++ ) {
    if ( crut.charAt(i) != ' ' && crut.charAt(i) != '.' && crut.charAt(i) != ',' && crut.charAt(i) != '-' ) {
      tmpstr = tmpstr + crut.charAt(i);
    };
  };
  crut = tmpstr;
  largo = crut.length;
  if ( largo < 2 ) {
    return false;
  };
  if ( largo > 2 ) {
    rut = crut.substring(0, largo - 1);
  }
  else {
    rut = crut.charAt(0);
  };
  dv = crut.charAt(largo-1);
  checkCDV( dv );
  if ( rut == null || dv == null ) {
    return false;
  };
  var dvr = '0';
  suma = 0;
  mul  = 2;
  for (i= rut.length -1 ; i >= 0; i--) {
    suma = suma + rut.charAt(i) * mul;
    if (mul == 7) {
      mul = 2;
    }
    else {
      mul++;
    };
  };
  res = suma % 11;
  if (res==1) {
    dvr = 'k';
  }
  else if (res==0) {
    dvr = '0';
  }
  else {
    dvi = 11-res;
    dvr = dvi + "";
  };

  if (dvr != dv.toLowerCase()) {
    return false;
  };
  return true;
};

function checkCDV(dvr) {
  var dv = dvr + "";
  if ( dv != '0' && dv != '1' && dv != '2' && dv != '3' && dv != '4' && dv != '5' && dv != '6' && dv != '7' && dv != '8' && dv != '9' && dv != 'k'  && dv != 'K') {
    return false;
  };
  return true;
};

// Funcion que valida la obligatoriedad de contenido
function is(control,args){
  var dato = '';
  if(control.type){
    if ((control.type == 'text') || (control.type == 'textarea') || (control.type == 'file') || (control.type == 'password') || (control.type == 'hidden')){
      dato = control.value;
    }else if (control.type == 'select-one'){
      dato = control.options[control.selectedIndex].value;
    }else if(control.type == 'checkbox'){
       if(control.checked){
         dato = 1;
       };
    };
  }else{
     if(control[0].type == 'radio'){
       var i = 0;
       for(i=0;i<control.length;i++){
         if(control[i].checked){
           dato = 1;
         };
       };
    }else{
      alert('is: validation dont work with type of field form.');
      return;
    };
  };
  if (dato != args){
      return false;
    }else{
      return true;
    };
};

// Funcion que valida la obligatoriedad de contenido
function notIs(control,args){
  var dato = '';
  if(control.type){
    if ((control.type == 'text') || (control.type == 'textarea') || (control.type == 'file') || (control.type == 'password') || (control.type == 'hidden')){
      dato = control.value;
    }else if (control.type == 'select-one'){
      dato = control.options[control.selectedIndex].value;
    }else if(control.type == 'checkbox'){
       if(control.checked){
         dato = 1;
       };
    };
  }else{
     if(control[0].type == 'radio'){
       var i = 0;
       for(i=0;i<control.length;i++){
         if(control[i].checked){
           dato = 1;
         };
       };
    }else{
      alert('notIs: validation dont work with type of field form.');
      return;
    };
  };
  if (dato == args){
      return false;
    }else{
      return true;
    };
};


function validate(){
// funciÛn que recibe estructura de datos de validaciones y las aplica
// devuelve verdadero(si formulario completo valida) o falso(si al menos alguna validacion falla)
  var validacion = 0;
  var strerr = '';
    for(validacion = 0; validacion < this.constr.length; validacion++){
      if(this.constr[validacion].field == ''){
         continue;
      };
      var form_name = this.fname;
      if(! document.forms[form_name]){
         alert('Form ['+this.fname+'] not found');
         return false
      };
      var elem = this.constr[validacion].field;
      if(!document.forms[form_name].elements[elem]){
         alert('Field Form ['+this.constr[validacion].field+'] not found');
         return false;
      };
      var obj_elem = document.forms[form_name].elements[elem];
//       alert(this.constr[validacion].tipo+'(obj_elem,this.constr[validacion].args)')
      try{
        var result = eval(this.constr[validacion].tipo+'(obj_elem,this.constr[validacion].args)');
      }catch(e){
        alert('[lib_validator]Error: '+e)
      }
      if(!result){
          if(this.mode == 'acum'){
            strerr = strerr + ' ' +this.constr[validacion].msg+"\n";
            change_color(obj_elem, this.bgcolor);
          }else{
              alert(this.constr[validacion].msg);
              change_color(obj_elem, this.bgcolor);
              if(obj_elem.type){
                  obj_elem.focus();
              }else{
                  obj_elem[0].focus();
              };
              return false;
          };
       }else{
         change_color(obj_elem, '');
       };
  };
// validaciones condicionales
   for(validacion = 0; validacion < this.conditional_constr.length; validacion++){
      if(this.conditional_constr[validacion].field == ''){
         continue;
      };
      var form_name = this.fname;
      if(! document.forms[form_name]){
         alert('Form ['+this.fname+'] not found');
         return false
      };
      var elem = this.conditional_constr[validacion].field;
      if(!document.forms[form_name].elements[elem]){
         alert('Field Form ['+this.conditional_constr[validacion].field+'] not found');
         return false;
      };
      var obj_elem = document.forms[form_name].elements[elem];
//       alert(this.constr[validacion].tipo+'(obj_elem,this.constr[validacion].args)')
     try{
        var res_cond = eval('this.'+this.conditional_constr[validacion].cond);
     }catch(e){
       alert('[lib_validator]Error: '+e)
     }
     if(res_cond){
       try{
           var result = eval(this.conditional_constr[validacion].tipo+'(obj_elem,this.constr[validacion].args)');
        }catch(e){
           alert('[lib_validator]Error: '+e)
        }
        if(!result){
            if(this.mode == 'acum'){
              strerr = strerr + ' ' +this.conditional_constr[validacion].msg+"\n";
              change_color(obj_elem, this.bgcolor);
            }else{
              alert(this.conditional_constr[validacion].msg);
              change_color(obj_elem, this.bgcolor);
              if(obj_elem.type){
                  obj_elem.focus();
              }else{
                  obj_elem[0].focus();
              };
              return false;
            };
        }else{
          change_color(obj_elem, '');
        };
      };
  };// fin de validaciones condicionales
  if((this.mode == 'acum') && (strerr != '')){
    alert(strerr);
    return false;
  };
  return true;
};

function change_color(obj, color){
    if(obj.style){
      obj.style.backgroundColor= color;
    };
};
function constraint(nom,tipo,fargs,msg){
    this.field = nom;
    this.tipo = tipo;
    this.args = fargs;
    this.msg = msg;
};

function conditional_constraint(nom,tipo,fargs,msg,cond){
    this.field = nom;
    this.tipo = tipo;
    this.args = fargs;
    this.msg = msg;
    this.cond = cond;
};


function Validador(formname, mode, color){
   this.fname = formname;
   if((mode != 'one') && (mode != 'acum')){
     alert('mode not valid in Validator constructor');
   };
   this.mode = mode;
   if(color == ''){
     color = 'ffb900';
   };
   this.bgcolor = color;
   this.constr = new Array;
   this.conditional_constr = new Array;
   this.addconstraint = add_constraint;
   this.delconstraint = del_constraint;
   this.addConditionalConstraint = add_conditional_constraint;
   this.delConditionalConstraint = del_conditional_constraint;
   this.validar = validate;
   this.condition = condition;
};

function add_constraint(control,fvalidation,fargs,errmsg){
  if(!this.fname){
    alert('Validator object not found');
    return;
  };
  this.constr.push(new constraint(control,fvalidation,fargs,errmsg));
  return true;
};

function del_constraint(control,fvalidation){
  if(!this.fname){
     alert('Validator object not found');
     return;
  };
  var erase = 0;
  for(validacion = 0; validacion < this.constr.length; validacion++){
    if ((this.constr[validacion].field == control) && (this.constr[validacion].tipo == fvalidation)){
       this.constr[validacion].field = '';
       this.constr[validacion].tipo = '';
       this.constr[validacion].args = '';
       this.constr[validacion].msg = '';
       erase++;
    };
  };
  if(erase != 0){
    return false;
  };
  return true;
};

function add_conditional_constraint(control,fvalidation,fargs,errmsg,cond){
  if(!this.fname){
    alert('Validator object not found');
    return;
  };
  this.conditional_constr.push(new conditional_constraint(control,fvalidation,fargs,errmsg,cond));
  return true;
};


function del_conditional_constraint(control,fvalidation){
  if(!this.fname){
     alert('Validator object not found');
     return;
  };
  var erase = 0;
  for(validacion = 0; validacion < this.conditional_constr.length; validacion++){
    if ((this.conditional_constr[validacion].field == control) && (this.conditional_constr[validacion].tipo == fvalidation)){
       this.conditional_constr[validacion].field = '';
       this.conditional_constr[validacion].tipo = '';
       this.conditional_constr[validacion].args = '';
       this.conditional_constr[validacion].msg = '';
       this.conditional_constr[validacion].cond = '';
       erase++;
    };
  };
  if(erase != 0){
    return false;
  };
  return true;
};

function condition(control,fvalidation,fargs){
      var form_name = this.fname;
      if(! document.forms[form_name]){
         alert('Form ['+this.fname+'] not found');
         return false
      };
      var obj_elem = document.forms[form_name].elements[control];
      try{
        var result = eval(fvalidation+'(obj_elem,fargs)');
        return result;
      }catch(e){
          return false;
      }
};
// -->
