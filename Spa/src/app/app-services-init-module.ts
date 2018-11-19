import { NgModule } from "@angular/core";
import { CacheServices } from "./infrastructure/services/cacheServices";

@NgModule()
export class InitializeApplicationServices {
    constructor() {
        this.InitializeServices();
    }

    private InitializeServices() : void {
        CacheServices.Initialize();
    }
}