import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ImportComponent } from './import/import.component';
import { StoreCostImportForm } from './forms/storeCostImportForm';
import { ProductCategoryService } from '../shared/services/ProductCategoryService';
import { MeasureUnitService } from '../shared/services/MeasureUnitService';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
         path: '',
         redirectTo: 'import',
         pathMatch: 'full'
      },
      {
        path: 'import',
        component: ImportComponent
      }
    ])
  ],
  declarations: [ImportComponent],
  providers: [ProductCategoryService, StoreCostImportForm, MeasureUnitService],
  exports: [RouterModule]
})

export class CostModule { }
