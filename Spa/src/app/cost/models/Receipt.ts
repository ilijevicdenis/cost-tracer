import { ReceiptItem } from "./ReceiptItem";

export class Receipt {
    public CreatedDate : Date;
    public Items: ReceiptItem[];

    constructor() {
        this.Items = [];
    }
}