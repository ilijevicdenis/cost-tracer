import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { Injectable } from "@angular/core";

@Injectable()
export class StoreCostImportForm {
    
    Instance: FormGroup;
    private costs: FormArray;

    constructor(private fb: FormBuilder) {
        this.buildForm();
        this.costs = <FormArray>this.Instance.get('costs');
    }

    private buildForm() : void {
        this.Instance = this.fb.group({
            'costDate': [ '', Validators.required ],
            'currency': [ '', Validators.required ],
            'costs': this.fb.array([this.generateRow()])
        });
    }

    private generateRow() : FormGroup {
        return this.fb.group({
            'markedForDeletion': false,
            'productName': ['', Validators.required],
            'productCategory': ['', Validators.required],
            'quantity': ['', Validators.required],
            'measureUnit': ['', Validators.required],
            'price': ['', Validators.required]
        });
    }

    public addNew(): void {
        this.costs.push(this.generateRow());
    }

    public deleteMarked(formsIndexes: number[]): void {
        if(Array.isArray(formsIndexes) && formsIndexes !== undefined && formsIndexes !== null) {
            formsIndexes.sort();
            console.log(formsIndexes);
            
            for(let value of formsIndexes) {
                this.costs.removeAt(value)
            }
            
            if(this.costs.length == 0) {
                this.addNew();
                this.costs.reset();
            }
        }
    }
      
    public isValid(): boolean {
        return true;
    }
}