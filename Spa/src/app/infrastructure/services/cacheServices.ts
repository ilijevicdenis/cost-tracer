import { CacheItem } from "../model/cacheItem";
import { Injectable } from "@angular/core";

@Injectable()
export  class CacheServices {
    private static _cashItems : CacheItem[];

    private constructor() {

    }
    
    public static Initialize() : void {
        this._cashItems = [];
    }

    private static cacheContainsKey(key: string) : boolean {
        return this._cashItems.findIndex(item => item.key === key) !== -1;
    }

    public static addItem(item: CacheItem) : boolean {
        if(item === undefined)
            throw new Error("Item can't be undefined")

        if (item === null) 
            throw new Error("Item can't be null");

        if(!item.key)
            throw new Error("Item canche must have key value");

        if(!this.cacheContainsKey(item.key)) {
            this._cashItems.push(item);
            return true;
        }
        else 
            return false;
    }

    public static getItem(key : string) : CacheItem {
        if(!key) 
            throw new Error("Key must have a value");
        
        if(this.cacheContainsKey(key))
            return this._cashItems.find(item => item.key === key)
        else
            throw new Error("Item for key:" + key + " wasn't found in cache");
    }
}