import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Constants } from '../../infrastructure/constants';
import { IProductCategory } from "../interfaces/IProductCategory";
import { Observable } from "rxjs";

@Injectable()
export class ProductCategoryService {

    public constructor(private _http: HttpClient) { }

    public GetProductCategories() : Observable<IProductCategory[]> {
        try {
            return this._http.get<IProductCategory[]>(Constants.API_SERVICE_ROOT + 'ProductCategory');
        }
        catch(e) {
            console.log(e);
        }
    }
}