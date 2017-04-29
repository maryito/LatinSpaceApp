import { Accounts } from 'meteor/accounts-base';
import { accountsUIBootstrap3 } from 'meteor/ian:accounts-ui-bootstrap-3';

accountsUIBootstrap3.setLanguage('es');
accountsUIBootstrap3.map('es', {
  _resetPasswordDialog: {
    title: 'Restablece tu contraseña',
    cancel: 'Cancelar',
    submit: 'Guardar',
  },
  _enrollAccountDialog: {
    title: 'Escribe una contraseña',
    cancel: 'Cerrar',
    submit: 'Guardar contraseña',
  },
});


Accounts.ui.config(
  {
    passwordSignupFields: 'USERNAME_ONLY',
    extraSignupFields: [
      {
        fieldName: 'name',
        fieldLabel: 'Nombre',
        inputType: 'text',
        showFieldLabel: true,
        visible: true,
        validate ( value, errorFunction) {
          // agregar esquemas
          if (!value) {
            errorFunction('Por favor ingresar nombre');
            return false;
          } else { return true; }
        },
      },{
        fieldName: 'roles',
        fieldLabel: 'Perfil',
        inputType: 'select',
        showFieldLabel: true,
        empty: 'Por favor seleccione la perfil',
        data: [{
          id: 1,
          label: 'Estudiantes',
          value: 'estudiante',
        }, {
          id: 2,
          label: 'Profesor',
          value: 'profesor',
        }], 
        visible: true,
        validate ( value, errorFunction) {
          // agregar esquemas
          if (!value) {
            errorFunction('Por favor ingrese el perfil');
            return false;
          } else { return true; }
        },
      },
    ],
  });

accountsUIBootstrap3.logoutCallback = function(error) {
  if(error) console.log("Error:" + error);
  Router.go('home');
}
