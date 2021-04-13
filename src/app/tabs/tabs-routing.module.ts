import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../guards/login.guard';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule),
        canActivate:[LoginGuard]
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule),
        canActivate:[LoginGuard]
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule),
        canActivate:[LoginGuard]
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'explore-container',
        loadChildren: () => import('../explore-container/explore-container.module').then(m => m.ExploreContainerComponentModule)
      },
      {
        path: 'actualizar-perfil',
        loadChildren: () => import('../pantallas/actualizar-perfil/actualizar-perfil.module').then(m => m.ActualizarPerfilPageModule),
        canActivate:[LoginGuard]
      },
      {
        path: 'contactar-dueno/:id',
        loadChildren: () => import('../pantallas/contactar-dueno/contactar-dueno.module').then(m => m.ContactarDuenoPageModule),
        canActivate:[LoginGuard]
      },
      {
        path: 'historial-de-pagos',
        loadChildren: () => import('../pantallas/historial-de-pagos/historial-de-pagos.module').then(m => m.HistorialDePagosPageModule),
        canActivate:[LoginGuard]
      },
      {
        path: 'inicio-sin-hospedaje',
        loadChildren: () => import('../pantallas/inicio-sin-hospedaje/inicio-sin-hospedaje.module').then(m => m.InicioSinHospedajePageModule)
      },
      {
        path: 'pagar-renta',
        loadChildren: () => import('../pantallas/pagar-renta/pagar-renta.module').then(m => m.PagarRentaPageModule),
        canActivate:[LoginGuard]
      },
      {
        path: 'registrar',
        loadChildren: () => import('../pantallas/registrar/registrar.module').then(m => m.RegistrarPageModule)
      },
      {
        path: 'seleccionar-hospedaje',
        loadChildren: () => import('../pantallas/seleccionar-hospedaje/seleccionar-hospedaje.module').then(m => m.SeleccionarHospedajePageModule),
        canActivate:[LoginGuard]
      },
      {
        path: 'valorar',
        loadChildren: () => import('../pantallas/valorar/valorar.module').then(m => m.ValorarPageModule)
      },
      {
        path: 'ver-ubicacion',
        loadChildren: () => import('../pantallas/ver-ubicacion/ver-ubicacion.module').then(m => m.VerUbicacionPageModule)
      },
      {
        path: 'verificar',
        loadChildren: () => import('../pantallas/verificar/verificar.module').then(m => m.VerificarPageModule)
      },
      {
        path: 'formulario-pagar-renta/:id',
        loadChildren: () => import('../pantallas/formulario-pagar-renta/formulario-pagar-renta.module').then( m => m.FormularioPagarRentaPageModule),
        canActivate:[LoginGuard]
      },

      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
