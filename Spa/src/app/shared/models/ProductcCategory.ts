import { IProductCategory } from "../interfaces/IProductCategory";
import { IValidate } from "../interfaces/IValidate";

export class ProductCategory implements IProductCategory, IValidate<ProductCategory> {

    public Id: number;    
    public Name: string;
    public Description: string;
    public IsActive: boolean;

    private constructor(data : IProductCategory) {
        if(data === undefined || data === null)
            throw new Error("Data can't be null or undefined")
        this.Intialize(data);
    }

    private Intialize(data: IProductCategory) : void {
       if(data.Id == 0) {
           this.Id = 0;
           this.Description = null;
           this.Name = null;
           this.IsActive = false
       }
       else {
           this.Id = data.Id;
           this.Name = data.Name;
           this.Description = data.Description
           this.IsActive = data.IsActive;
       }
    }

    public static Empty () : ProductCategory {
        return new this(<IProductCategory>{});
    } 

    public static Instaniate(data : IProductCategory) : ProductCategory {
        return new this(data);
    }

    public IsValid(): boolean {
        if(this.Id > 0 ) {
            // call backend server
            return true;
        }
        else {
            if(!this.Description) return false;
            if(!this.Name) return false;
        }
    }

}