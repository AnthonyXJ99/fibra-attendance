import { Injectable, signal, Signal } from '@angular/core';
import { MenuItem } from 'primeng/api';

export type MenuType = 'personal' | 'dispositivo' | 'asistencia' | 'sistema';

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    // Signal para el tipo de menú activo
    private _activeMenuType = signal<MenuType>('personal');
    // Signal para el menú actual
    private _currentMenu = signal<MenuItem[]>([]);

    // Getter readonly para el tipo de menú activo
    get activeMenuType(): Signal<MenuType> {
        return this._activeMenuType.asReadonly();
    }

    // Getter readonly para el menú actual
    get currentMenu(): Signal<MenuItem[]> {
        return this._currentMenu.asReadonly();
    }

    constructor() {}

    setActiveMenu(menuType: MenuType) {
        console.log('MenuService: setActiveMenu called with:', menuType);
        this._activeMenuType.set(menuType);
        console.log('MenuService: activeMenuType updated to:', this._activeMenuType());
    }

    getActiveMenuType(): MenuType {
        return this._activeMenuType();
    }

    setCurrentMenu(menu: MenuItem[]) {
        this._currentMenu.set(menu);
    }

    getCurrentMenu(): MenuItem[] {
        return this._currentMenu();
    }
} 