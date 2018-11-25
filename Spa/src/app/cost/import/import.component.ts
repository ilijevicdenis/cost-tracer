import { Component, OnInit } from '@angular/core';
import { StoreCostImportForm } from '../forms/storeCostImportForm';
import { FormGroup } from '@angular/forms';
import { ProductCategoryService } from '../../shared/services/ProductCategoryService'
import { ProductCategory } from '../../shared/models/ProductcCategory'
import { MeasureUnitService } from '../../shared/services/MeasureUnitService';
import { MeasureUnit } from '../../shared/models/MeasureUnit';
import { CurrencyService } from '../../shared/services/CurrencyService';
import { Currency } from '../../shared/models/Currency';


@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {

  public storeForm : FormGroup;
  private _productCategories : ProductCategory[];
  private _productMeasureUnits: MeasureUnit[]
  private _markedForDeletion: number[];
  private _currencies : Currency[];

  constructor(
    private _formManager : StoreCostImportForm, 
    private _prodCatSvc : ProductCategoryService, 
    private _prodMeasureUnitSvc: MeasureUnitService,
    private _currencySvc : CurrencyService ) 
    {

      this.storeForm = _formManager.Instance;
      this._productCategories = [];
      this._productMeasureUnits = [];
      this._markedForDeletion = [];
      this._currencies = [];
   }

  ngOnInit() {
      this._prodCatSvc.GetProductCategories().subscribe(data =>
          data.forEach(item => this._productCategories.push(ProductCategory.Instantiate(item))));

      this._prodMeasureUnitSvc.GetMeasureUnits().subscribe(data => 
          data.forEach(item => this._productMeasureUnits.push(MeasureUnit.Instantiate(item))));

      this._currencySvc.GetCurrencies().subscribe(data => 
          data.forEach(curr => this._currencies.push(Currency.CreateNew(curr))));
  }

  public addNew() : void {
    this._formManager.addNew();
  }

  public markCostForDeletion(costIndex:number) : void {
      let indexOf = this._markedForDeletion.indexOf(costIndex);
      
      if(indexOf === -1) {
          this._markedForDeletion.push(costIndex)
      }
      else {
         this._markedForDeletion.splice(indexOf, 1);
      }
  }
  
  public deleteMarked() : void {
    this._formManager.deleteMarked(this._markedForDeletion);
    this._markedForDeletion = [];
  }

  public saveReceipt() : void {
      let receipt = this._formManager.BuildReceipt();
      console.log(receipt);
  }

  // Public getters for collections

  public get ProductCategories() : ProductCategory[] {
    return this._productCategories;
  }

  public get MeasureUnits() : MeasureUnit[] {
      return this._productMeasureUnits;
  }

  public get Currencies() : Currency[] {
    return this._currencies;
  }
}
