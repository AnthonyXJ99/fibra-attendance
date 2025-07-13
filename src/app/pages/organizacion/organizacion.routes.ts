import { Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioSedeComponent } from './usuario-sede/usuario-sede.component';

export default [
    { path: 'usuario', data: { breadcrumb: 'Usuario' }, component: UsuarioComponent },
    { path: 'usuario-sede', data: { breadcrumb: 'Usuario Sede' }, component: UsuarioSedeComponent }
] as Routes;