import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { Injectable } from "@angular/core";
import { Receipt } from "../models/Receipt";
import { ReceiptItem } from "../models/ReceiptItem";

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
            
            formsIndexes.sort().reverse();
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

    BuildReceipt(): Receipt {
          var receipt = new Receipt();
          receipt.CreatedDate = this.Instance.controls["costDate"].value;
          
          this.costs.controls.forEach(costGroup => {
                let costControls = (<FormGroup>costGroup).controls;
                let receiptItem = new ReceiptItem();
                
                receiptItem.ProductCategoryId = <number>costControls["productCategory"].value;
                receiptItem.MeasureUnitId = <number>costControls["measureUnit"].value;
                receiptItem.Price = <number>costControls["price"].value;
                receiptItem.Name = <string>costControls["productName"].value;
                receiptItem.Quantity = <number>costControls["quantity"].value;

                receipt.Items.push(receiptItem);
          });

        return receipt;
      }
}