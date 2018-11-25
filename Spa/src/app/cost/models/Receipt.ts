import { ReceiptItem } from "./ReceiptItem";

export class Receipt {
    public CreatedDate : Date;
    public CurrencyId : number;
    public Items: ReceiptItem[];

    constructor() {
        this.Items = [];
    }
}