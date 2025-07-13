import {  Component,  } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { SplitterModule } from 'primeng/splitter';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { Tag } from "primeng/tag";
import { DropdownModule } from 'primeng/dropdown';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [
    PanelModule,
    SplitterModule,
    FloatLabelModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    IconFieldModule,
    InputIconModule,
    Tag,
    DropdownModule,
    DatePipe
],
  templateUrl: './usuario.component.html',
})
export class UsuarioComponent {

  users = [
    {
      id: 1,
      username: 'admin',
      email: 'admin@ejemplo.com',
      role: 'Administrador',
      status: 'Activo',
      createdAt: new Date()
    },
    {
      id: 2,
      username: 'usuario1',
      email: 'usuario1@ejemplo.com',
      role: 'Usuario',
      status: 'Activo',
      createdAt: new Date()
    }
  ];

  selectedUsers: any[] = [];

  roles = [
    { name: 'Administrador', value: 'admin' },
    { name: 'Usuario', value: 'user' },
    { name: 'Moderador', value: 'moderator' }
  ];

  getRoleSeverity(role: string) {
    switch (role) {
      case 'Administrador': return 'danger';
      case 'Moderador': return 'warning';
      case 'Usuario': return 'info';
      default: return 'secondary';
    }
  }

  getStatusSeverity(status: string) {
    switch (status) {
      case 'Activo': return 'success';
      case 'Inactivo': return 'danger';
      case 'Pendiente': return 'warning';
      default: return 'secondary';
    }
  }

  // Aquí irá la lógica de TS para el formulario y la tabla
}
