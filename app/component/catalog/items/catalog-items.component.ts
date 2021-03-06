/**
 * Created by Vladimir on 11.10.2016.
 */
import {Component, OnInit, ElementRef} from "@angular/core";

import { CatalogService } from '../../../shared/catalog/catalog.service';
import { IHeader } from "../../../shared/catalog/catalog.header";

declare var $ : any;

@Component({
    selector : 'tbody[catalog-items]',
    templateUrl : './app/component/catalog/items/catalog-items.component.html',
    styleUrls: ['./app/component/catalog/items/catalog-items.component.css'],

})
export class CatalogItemsComponent implements OnInit{
    headers : IHeader[];
    items : any[];




    constructor(private catalogService : CatalogService){
    }

    ngOnInit(): void {
        this.headers = this.catalogService.getHeaders();
        this.items = this.catalogService.getItems();

    }

    delete(){
        console.log("DELETE ITEM")
    }





}