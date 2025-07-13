import { Component, OnInit, effect, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem, TreeNode } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';
import { MenuService, MenuType } from '../service/menu.service';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<div>
     
        <ul class="layout-menu">
            <ng-container *ngFor="let item of currentMenu; let i = index">
                <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
                <li *ngIf="item.separator" class="menu-separator"></li>
            </ng-container>
        </ul>
    </div> `
})
export class AppMenu implements OnInit {
    model: MenuItem[] = [];
    deviceModel: MenuItem[] = [];
    asistenciaModel: MenuItem[] = [];
    sistemaModel: MenuItem[] = [];
    
    // Menú actual que se muestra
    currentMenu: MenuItem[] = [];

    constructor(private menuService: MenuService) {
        // Usar effect en el constructor para que se ejecute inmediatamente
        effect(() => {
            const menuType = this.menuService.activeMenuType();
            console.log('Menu effect triggered, menuType:', menuType);
            this.updateCurrentMenu(menuType);
        });
        
        // También probar con un timeout para verificar que el effect funciona
        setTimeout(() => {
            console.log('Testing effect manually...');
            const currentType = this.menuService.activeMenuType();
            console.log('Current menu type:', currentType);
        }, 1000);
    }

    ngOnInit() {
        this.model = [
            {
                label: 'Organización',
                items: [
                    {
                        label: 'Usuario',
                        icon: 'pi pi-user',
                        routerLink: ['/orgnizacion/usuario']
                    },
                    {
                        label: 'Usuario - Sede',
                        icon: 'pi pi-map-marker',
                        routerLink: ['/orgnizacion/usuario-sede']
                    },
                    {
                        label: 'Sede - Area -Costo',
                        icon: 'pi pi-money-bill',
                        routerLink: ['/orgnizacion/sede-area-costo']
                    },
                    {
                        label: 'Sede - Centro Costo',
                        icon: 'pi pi-money-bill',
                        routerLink: ['/orgnizacion/sede-centro-costo']
                    }
                ]
            },
            {
                label: 'Empleado',
                items: [
                    {
                        label: 'Empleado',
                        icon: 'pi pi-user',
                        routerLink: ['/empleado']
                    },
                    {
                        label: 'Empleado Con Horario',
                        icon: 'pi pi-clock',
                        routerLink: ['/empleado-con-horario']
                    }
                    
                ]
            },
            {
                label: 'Home',
                items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }]
            },
            {
                label: 'UI Components',
                items: [
                    { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                    { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                    { label: 'Button', icon: 'pi pi-fw pi-mobile', class: 'rotated-icon', routerLink: ['/uikit/button'] },
                    { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
                    { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
                    { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
                    { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
                    { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
                    { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
                    { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'] },
                    { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
                    { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
                    { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
                    { label: 'Timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['/uikit/timeline'] },
                    { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }
                ]
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                routerLink: ['/pages'],
                items: [
                    {
                        label: 'Landing',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/landing']
                    },
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access']
                            }
                        ]
                    },
                    {
                        label: 'Crud',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/crud']
                    },
                    {
                        label: 'Not Found',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/pages/notfound']
                    },
                    {
                        label: 'Empty',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/pages/empty']
                    }
                ]
            },
            {
                label: 'Hierarchy',
                items: [
                    {
                        label: 'Submenu 1',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 1.1',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                            {
                                label: 'Submenu 1.2',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }]
                            }
                        ]
                    },
                    {
                        label: 'Submenu 2',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 2.1',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                            {
                                label: 'Submenu 2.2',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }]
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Get Started',
                items: [
                    {
                        label: 'Documentation',
                        icon: 'pi pi-fw pi-book',
                        routerLink: ['/documentation']
                    },
                    {
                        label: 'View Source',
                        icon: 'pi pi-fw pi-github',
                        url: 'https://github.com/primefaces/sakai-ng',
                        target: '_blank'
                    }
                ]
            }

        ];

        // device model
        this.deviceModel = [
            {
                label: 'Dispositivo',
                icon: 'pi pi-tablet',
                routerLink: ['/dispositivo'],
                tooltip: 'Dispositivo',
                items: [
                    {
                        label: 'Dispositivo',
                        icon: 'pi pi-tablet',
                        routerLink: ['/dispositivo']
                    }
                ]
            },
            {
                label: 'Datos',
                icon: 'pi pi-database',
                items: [
                    {
                        label: 'Marcaciones',
                        icon: 'pi pi-check',
                        routerLink: ['/marcaciones']
                    },
                    {
                        label: 'Asistencia',
                        icon: 'pi pi-check',
                        routerLink: ['/asistencia']
                    },
                    
                ]
            },
           
        ];

        // asistencia model
        this.asistenciaModel = [
            {
                label: 'Asistencia',
                icon: 'pi pi-check',
                items: [
                    {
                        label: 'Reportes',
                        icon: 'pi pi-chart-bar',
                        routerLink: ['/reportes-asistencia']
                    },
                    {
                        label: 'Horarios',
                        icon: 'pi pi-clock',
                        routerLink: ['/horarios']
                    },
                    {
                        label: 'Permisos',
                        icon: 'pi pi-calendar',
                        routerLink: ['/permisos']
                    }
                ]
            }
        ];

        // sistema model
        this.sistemaModel = [
            {
                label: 'Sistema',
                icon: 'pi pi-cog',
                items: [
                    {
                        label: 'Configuración',
                        icon: 'pi pi-wrench',
                        routerLink: ['/configuracion']
                    },
                    {
                        label: 'Usuarios',
                        icon: 'pi pi-users',
                        routerLink: ['/usuarios-sistema']
                    },
                    {
                        label: 'Logs',
                        icon: 'pi pi-file',
                        routerLink: ['/logs']
                    }
                ]
            }
        ];

        // Inicializar el menú por defecto
        this.currentMenu = [];
    }

    private updateCurrentMenu(menuType: MenuType) {
        console.log('updateCurrentMenu called with:', menuType);
        switch (menuType) {
            case 'personal':
                this.currentMenu = this.model;
                console.log('Switched to personal menu, items:', this.currentMenu.length);
                break;
            case 'dispositivo':
                this.currentMenu = this.deviceModel;
                console.log('Switched to dispositivo menu, items:', this.currentMenu.length);
                break;
            case 'asistencia':
                this.currentMenu = this.asistenciaModel;
                console.log('Switched to asistencia menu, items:', this.currentMenu.length);
                break;
            case 'sistema':
                this.currentMenu = this.sistemaModel;
                console.log('Switched to sistema menu, items:', this.currentMenu.length);
                break;
            default:
                this.currentMenu = this.model;
                console.log('Switched to default menu, items:', this.currentMenu.length);
        }
    }

    // Método público para probar manualmente
    testMenuChange(menuType: MenuType) {
        console.log('Manual test: changing menu to:', menuType);
        this.menuService.setActiveMenu(menuType);
    }
}
