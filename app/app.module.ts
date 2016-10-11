/**
 * Created by Vladimir on 06.10.2016.
 */



import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { AppComponent } from "./app.component";
import { CatalogComponent } from "./component/catalog/catalog.component";
import { CatalogHeadersComponent } from "./component/catalog/headers/catalog-headers.component";
import { CatalogItemsComponent } from "./component/catalog/items/catalog-items.component";
import { TestComponent } from "./component/test.component";


@NgModule({
    imports:      [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        CatalogHeadersComponent,
        CatalogItemsComponent,
        CatalogComponent,
        TestComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }