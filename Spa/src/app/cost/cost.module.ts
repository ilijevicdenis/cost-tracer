import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ImportComponent } from './import/import.component';
import { StoreCostImportForm } from './forms/storeCostImportForm';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'import',
        component: ImportComponent
      }
    ])
  ],
  declarations: [ImportComponent],
  providers: [ StoreCostImportForm ],
  exports: [RouterModule]
})

export class CostModule { }
