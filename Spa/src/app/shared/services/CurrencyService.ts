import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ICurrency } from "../interfaces/ICurrency";
import { Constants } from "../../infrastructure/constants";

@Injectable()
export class CurrencyService {

    constructor(private http: HttpClient) {}

    public GetCurrencies() : Observable<ICurrency[]>{
        return this.http.get<ICurrency[]>(
            Constants.API_SERVICE_ROOT + "currencies"
        )
    }

}