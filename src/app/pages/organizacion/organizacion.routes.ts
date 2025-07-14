import { Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioSedeComponent } from './usuario-sede/usuario-sede.component';
import { SedeCcostoComponent } from './sede-ccosto/sede-ccosto.component';

export default [
    { path: 'usuario', data: { breadcrumb: 'Usuario' }, component: UsuarioComponent },
    { path: 'usuario-sede', data: { breadcrumb: 'Usuario Sede' }, component: UsuarioSedeComponent },
    { path: 'sede-ccosto', data: { breadcrumb: 'Sede Ccosto' }, component: SedeCcostoComponent }
] as Routes;