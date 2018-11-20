export class Money {
    private _isoName : string;
    private _value : number;

    private constructor() {

    }

    public get Name() : string {
        return this._isoName;
    }

    public get Value() : number {
        return this._value;
    }

    public static Empty() : Money {
        return new Money();
    }
}