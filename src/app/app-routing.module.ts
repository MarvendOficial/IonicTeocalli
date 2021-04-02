import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pantallas/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'verificar',
    loadChildren: () => import('./pantallas/verificar/verificar.module').then( m => m.VerificarPageModule)
  },
  {
    path: 'inicio-sin-hospedaje',
    loadChildren: () => import('./pantallas/inicio-sin-hospedaje/inicio-sin-hospedaje.module').then( m => m.InicioSinHospedajePageModule)
  },
  {
    path: 'seleccionar-hospedaje',
    loadChildren: () => import('./pantallas/seleccionar-hospedaje/seleccionar-hospedaje.module').then( m => m.SeleccionarHospedajePageModule)
  },
  {
    path: 'contactar-dueno',
    loadChildren: () => import('./pantallas/contactar-dueno/contactar-dueno.module').then( m => m.ContactarDuenoPageModule)
  },
  {
    path: 'actualizar-perfil',
    loadChildren: () => import('./pantallas/actualizar-perfil/actualizar-perfil.module').then( m => m.ActualizarPerfilPageModule)
  },
  {
    path: 'valorar',
    loadChildren: () => import('./pantallas/valorar/valorar.module').then( m => m.ValorarPageModule)
  },
  {
    path: 'ver-ubicacion',
    loadChildren: () => import('./pantallas/ver-ubicacion/ver-ubicacion.module').then( m => m.VerUbicacionPageModule)
  },
  {
    path: 'pagar-renta',
    loadChildren: () => import('./pantallas/pagar-renta/pagar-renta.module').then( m => m.PagarRentaPageModule)
  },
  {
    path: 'historial-de-pagos',
    loadChildren: () => import('./pantallas/historial-de-pagos/historial-de-pagos.module').then( m => m.HistorialDePagosPageModule)
  },
  {
    path: 'explore-container',
    loadChildren: () => import('./explore-container/explore-container.module').then( m => m.ExploreContainerComponentModule)
  },  {
    path: 'recuperar-cuenta',
    loadChildren: () => import('./pantallas/recuperar-cuenta/recuperar-cuenta.module').then( m => m.RecuperarCuentaPageModule)
  },
  {
    path: 'verificacion',
    loadChildren: () => import('./pantallas/verificacion/verificacion.module').then( m => m.VerificacionPageModule)
  },
  {
    path: 'formulario-pagar-renta',
    loadChildren: () => import('./pantallas/formulario-pagar-renta/formulario-pagar-renta.module').then( m => m.FormularioPagarRentaPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
