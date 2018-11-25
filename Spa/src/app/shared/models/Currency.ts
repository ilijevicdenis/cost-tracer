import { ICurrency } from "../interfaces/ICurrency";

export class Currency {
    private  _Id : number;
    private _isoName : string;

    private constructor(curr : ICurrency) {
        if(curr && curr.Id && curr.IsoName) {
            this._Id = curr.Id;
            this._isoName = curr.IsoName
        } 
        else {
            this._Id = 0;
            this._isoName = "";
        }
    }

    public get Id() : number {
        return this._Id
    }

    public get IsoName() : string {
        return this._isoName;
    }

    public static CreateNew(currency : ICurrency) : Currency {
        return new Currency(currency)
    }
}