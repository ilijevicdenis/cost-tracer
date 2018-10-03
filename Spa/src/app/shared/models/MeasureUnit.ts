import { IMeasureUnit } from "../interfaces/IMeasureUnit";
import { IValidate } from "../interfaces/IValidate";

export class MeasureUnit implements IMeasureUnit, IValidate<MeasureUnit> {

    public Id: number;    
    public Value: number;
    public IsActive: boolean;

    private constructor(data : IMeasureUnit) {
        this.Initialize(data);
    }

    private Initialize(data: IMeasureUnit) : void {
        if(data.Id == 0) {
            this.Id = 0;
            this.IsActive = false;
            this.Value = null
        } else {
            this.Id = data.Id;
            this.Value = data.Value;
            this.IsActive = data.IsActive;
        }
    }

    
    public IsValid(): boolean {
        if(this.Id > 0) {
            // call server 
            return true;
        }
        else {
            if(!this.Value) 
                return false;
        }

        return false;
    }

    public static Empty() : MeasureUnit {
        return new this(<IMeasureUnit>{});
    }

    public static Instantiate(data : IMeasureUnit) : MeasureUnit {
        return new this(data);
    }
    
}