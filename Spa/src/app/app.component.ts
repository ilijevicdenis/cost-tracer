import { Component, OnInit } from '@angular/core';
import { MenuItem } from './infrastructure/model/menuItem';
import { CacheServices } from './infrastructure/services/cacheServices';
import { Constants } from './infrastructure/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  private _menutItems : MenuItem[];

  constructor() {
    this._menutItems = [];
  }

  public ngOnInit(): void {
     
    try {
      let item = CacheServices.getItem(Constants.MENU_ITEMS_KEY);
      let itemValues = item.value as MenuItem[];
      itemValues.forEach(it => this._menutItems.push(it));
    }
    catch(err){

    }
  }

  public get MenuItems() : MenuItem[] {
    return this._menutItems;
  }
}
