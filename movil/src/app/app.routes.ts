import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'registro',
    loadComponent: () => import('./registro/registro.page').then( m => m.RegistroPage)
  },
  {
    path: 'chat-rutina',
    loadComponent: () => import('./chat-rutina/chat-rutina.page').then( m => m.ChatRutinaPage)
  },
  {
    path: 'chat-nutricion',
    loadComponent: () => import('./chat-nutricion/chat-nutricion.page').then( m => m.ChatNutricionPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'estadisticas',
    loadComponent: () => import('./estadisticas/estadisticas.page').then( m => m.EstadisticasPage)
  },
  {
    path: 'registro-datos-usuario',
    loadComponent: () => import('./registro-datos-usuario/registro-datos-usuario.page').then( m => m.RegistroDatosUsuarioPage)
  },
  
];
