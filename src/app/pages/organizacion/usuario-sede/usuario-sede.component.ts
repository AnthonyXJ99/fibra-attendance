import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DropdownModule } from "primeng/dropdown";
import { Button } from "primeng/button";
import { TableModule } from "primeng/table";
import { Tag } from "primeng/tag";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-usuario-sede',
  imports: [
    DropdownModule,
    Button,
    TableModule,
    Tag,
    DatePipe
],
  templateUrl: './usuario-sede.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsuarioSedeComponent {
  usuarios = [
    {
      usuario: 'Juan Perez',
      sede: 'Sede 1',
      observacion: 'Observación 1',
      estado: 'Activo'
    }
  ]
  sedes = [

  ]
  fechaActual = new Date();
  usuarioSedeList=[];
 }
