import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { MenuComponent } from './menu/menu.component';
import { AdministrationModule } from './administration/administration.module';
import { CostModule } from './cost/cost.module';
import { CacheServices } from './infrastructure/services/cacheServices';
import { CacheItem } from './infrastructure/model/cacheItem';
import { Constants } from './infrastructure/constants';
import { MenuItem } from './infrastructure/model/menuItem';
import { BrowserServices } from './infrastructure/services/browserServices';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: 'menu',
                pathMatch: 'full'
            },
            {
                path: 'menu',
                component: MenuComponent
            },
            {
                path: 'administration',
                loadChildren: () => AdministrationModule
            },
            {
                path: 'cost',
                loadChildren: () => CostModule
            }

        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

    constructor() {
        CacheServices.addItem(this.MenuItems);
    }

    private get MenuItems() : CacheItem {
        var item = new CacheItem();
        item.key = Constants.MENU_ITEMS_KEY;

        var menuItems : MenuItem[] = [];
        
        // administration
        var admin = new MenuItem();
        admin.className = 'fas fa-dharmachakra';
        admin.routeName = 'Administration';
        admin.routeUrl = BrowserServices.buildApplicationLink('administration');
        menuItems.push(admin);

        // costs
        var cost = new MenuItem();
        cost.className = 'fas fa-file-invoice';
        cost.routeName = "Costs"
        cost.routeUrl = BrowserServices.buildApplicationLink("cost");
        menuItems.push(cost);

        item.value = menuItems;
        return item;
    }
}