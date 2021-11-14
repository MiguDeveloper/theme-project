$(document).ready(function () {
  $('#fNacimiento').datepicker({
    dateFormat: 'dd/mm/yy',
    changeYear: true,
    yearRange: '-70:+0',
    maxDate: '-14y',
    dayNames: [
      'Domingo',
      'Lunes',
      'Martes',
      'Miercoles',
      'Jueves',
      'Viernes',
      'Sabado',
    ],
    dayNamesMin: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
    firstDay: 1,
    gotoCurrent: true,
    monthNames: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Deciembre',
    ],
  });

  $('#fNacimiento').tooltip({
    classes: {
      'ui-tooltip': 'highlight',
    },
  });

  $('#frmRegistro').validate({
    rules: {
      nombres: {
        required: true,
      },
      pApellido: {
        required: true,
      },
      sApellido: {
        required: true,
      },
      dni: {
        required: true,
        number: true,
        minlength: 8,
        maxlength: 8,
      },
      fNacimiento: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      nroCelular: {
        required: true,
        number: true,
        minlength: 9,
        maxlength: 9,
      },
    },
    messages: {
      nombres: {
        required: 'El campo es requerido',
      },
      pApellido: {
        required: 'El campo es requerido',
      },
      sApellido: {
        required: 'El campo es requerido',
      },
      dni: {
        required: 'El campo es requerido',
        number: 'Solo digitos númericos',
        minlength: 'Minimo 8 digitos',
        maxlength: 'Máximo 8 digitos',
      },
      fNacimiento: {
        required: 'El campo es requerido',
      },
      email: {
        required: 'El campo es requerido',
        email: 'Formato de correo no es valido',
      },
      nroCelular: {
        required: 'El campo es requerido',
        number: 'Solo digitos númericos',
        minlength: 'Minimo 9 digitos',
        maxlength: 'Máximo 9 digitos',
      },
    },
  });
});
