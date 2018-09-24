import { Component, OnInit } from '@angular/core';
import { StoreCostImportForm } from '../forms/storeCostImportForm';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {

  public storeForm : FormGroup;

  constructor(private formManager : StoreCostImportForm) {
      this.storeForm = formManager.Instance;
      console.log(<FormArray>this.storeForm.get('costs'));
   }

  ngOnInit() {
  }

  public addNew() : void {
    this.formManager.addNew();
    console.log( (<FormArray>this.storeForm.get('costs')).length);

  }

  public deleteMarked() : void {

  }
}
