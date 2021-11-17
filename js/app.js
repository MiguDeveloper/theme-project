$(document).ready(function () {
  $('#show-allow').hide();
  $('#reject14').hide();
  $('#reject18').hide();

  let cont = 0;

  $('#fNacimiento').datepicker({
    dateFormat: 'dd/mm/yy',
    changeYear: true,
    yearRange: '-70:+0',
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
    onSelect: function () {
      let date = $(this).datepicker('getDate');
      const dateFormatISO = new Date(date).toISOString();
      const arrDate = dateFormatISO.split('T')[0].split('-');
      const currentDate = new Date();
      let edad = currentDate.getFullYear() - +arrDate[0];
      const month = currentDate.getMonth() + 1 - arrDate[1];

      if (month < 0 || (month === 0 && currentDate.getDate() < arrDate[2])) {
        edad--;
      }

      if (edad > 18) {
        console.log('eres mayor de 18');
        $('#show-allow').hide();
        $('#reject14').hide();
        $('#reject18').show('slow');
        return;
      }

      if (edad < 14) {
        console.log('eres menor de 14');
        $('#show-allow').hide();
        $('#reject18').hide();
        $('#reject14').show('slow');
        return;
      }

      $('#reject18').hide('slow');
      $('#reject14').hide('slow');
      $('#show-allow').show('slow');
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
      survey: {
        required: true,
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
      survey: {
        required: 'El campo es requerido',
      },
    },
    submitHandler: function (form) {
      if (grecaptcha.getResponse()) {
        e.preventDefault();
        alert('Relleno el capchat!');
      } else {
        alert('No relleno el capcha');
      }

      cont++;
      // if (cont === 1) {
      //   const swalWithBootstrapButtons = Swal.mixin({
      //     customClass: {
      //       confirmButton: 'btn-ok',
      //     },
      //     buttonsStyling: false,
      //   });
      //   swalWithBootstrapButtons
      //     .fire({
      //       icon: 'info',
      //       title: '',
      //       confirmButtonColor: '#ff68ff',
      //       allowOutsideClick: false,
      //       text: 'Hola, ya estas a punto de completar tu registro; es importante que toda la información ingresada sea actual y correcta. No olvides que debes tener acceso inmediato al correo y celular consignado.',
      //     })
      //     .then((result) => {
      //       $('#submitForm').css('background', '#ffec00');
      //     });
      // }

      // if (cont === 2) {
      //   // submit form
      //   console.log('enviar formulario');
      // }
    },
  });
});
