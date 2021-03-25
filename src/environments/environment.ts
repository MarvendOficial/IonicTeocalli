// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const direccionAPI = "https://afternoon-reaches-14063.herokuapp.com";
export const environment = {
  production: false,
  apiURl: direccionAPI,
  direccionCrearCuenta: direccionAPI + '/api/v1/auth/account',
  direccionIniciarSesion: direccionAPI + '/api/v1/auth',
  direccionCC: direccionAPI + '/api/v1/auth/changue_password'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
