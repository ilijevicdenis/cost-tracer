import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { MenuComponent } from './menu/menu.component';
import { AdministrationModule } from './administration/administration.module';
import { CostModule } from './cost/cost.module';

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
export class AppRoutingModule {}