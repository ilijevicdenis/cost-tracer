import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IMeasureUnit } from "../interfaces/IMeasureUnit";
import { HttpClient } from "@angular/common/http";
import { Constants } from "../../infrastructure/constants";

@Injectable()
export class MeasureUnitService {

    constructor(private _http: HttpClient) {

    }

    public GetMeasureUnits() : Observable<IMeasureUnit[]> {
        try {
            return this._http.get<IMeasureUnit[]>(Constants.API_SERVICE_ROOT + 'MeasureUnit');
        }
        catch(e) {
            console.log(e)
        }
    }
}