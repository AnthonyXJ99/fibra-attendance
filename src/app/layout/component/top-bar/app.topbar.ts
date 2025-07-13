import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { AppConfigurator } from '../app.configurator';
import { LayoutService } from '../../service/layout.service';
import { MenuService, MenuType } from '../../service/menu.service';
import { MenubarModule } from 'primeng/menubar';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [
        RouterModule,
         CommonModule, 
         StyleClassModule, 
         AppConfigurator,
         MenubarModule
        ],
    templateUrl: './app.topbar.html'
})
export class AppTopbar {
    items!: MenuItem[];

    constructor(
        public layoutService: LayoutService,
        private menuService: MenuService
    ) {}

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }

    // menu items con comandos para cambiar el menú
    menuItems = [
        {
            label: 'Personal',
            icon: 'pi pi-user',
            command: () => this.onMenuSelect('personal')
        },
        {
            label: 'Dispositivo',
            icon: 'pi pi-tablet',
            command: () => this.onMenuSelect('dispositivo')
        },
        {
            label: 'Asistencia',
            icon: 'pi pi-check',
            command: () => this.onMenuSelect('asistencia')
        },
        {
            label: 'Sistema',
            icon: 'pi pi-cog',
            command: () => this.onMenuSelect('sistema')
        }
    ];

    // Método para manejar la selección del menú
    onMenuSelect(menuType: MenuType) {
        console.log('Topbar: onMenuSelect called with:', menuType);
        this.menuService.setActiveMenu(menuType);
        console.log('Topbar: Menu service updated');
    }
}
