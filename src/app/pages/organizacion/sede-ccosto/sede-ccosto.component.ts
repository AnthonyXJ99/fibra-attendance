import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Button } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { Tag } from 'primeng/tag';

@Component({
  selector: 'app-sede-ccosto',
  imports: [
    DropdownModule,
    Button,
    TableModule,
    Tag,
    DatePipe,
    InputTextModule,
  ],
  templateUrl: './sede-ccosto.component.html',
  styleUrl: './sede-ccosto.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SedeCcostoComponent { 
  sedes = [
    { id: 1, nombre: 'Sede 1' },
    { id: 2, nombre: 'Sede 2' },
    { id: 3, nombre: 'Sede 3' }
  ];
  centrosCosto = [
    { id: 1, nombre: 'Centro de Costo 1' },
  ]
  fechaActual = new Date();
  sedeCcostoList = [];
}
