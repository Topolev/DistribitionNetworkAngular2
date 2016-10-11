/**
 * Created by Vladimir on 10.10.2016.
 */
import {Component, OnInit} from "@angular/core";

import { CatalogService } from '../../shared/catalog/catalog.service';
import { IHeader } from "../../shared/catalog/catalog.header";

@Component({
    selector : 'catalog',
    templateUrl : './app/component/catalog/catalog.component.html'
})
export class CatalogComponent implements OnInit{
    headers : IHeader[];
    items : any[];

    constructor(private catalogService : CatalogService){
    }

    ngOnInit(): void {
        this.headers = this.catalogService.getHeaders();
        this.items = this.catalogService.getItems();
    }

    newItem(){
        console.log(this.catalogService.newItem())
    }

}
