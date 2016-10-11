/**
 * Created by Vladimir on 11.10.2016.
 */
/**
 * Created by Vladimir on 11.10.2016.
 */
import {Component, OnInit, ElementRef, Input} from "@angular/core";

import { CatalogService } from '../../../shared/catalog/catalog.service';
import { IHeader } from "../../../shared/catalog/catalog.header";



@Component({
    selector : 'tr[catalog-item]',
    templateUrl : './app/component/catalog/item/catalog-item.component.html',

})
export class CatalogItemComponent implements OnInit{
    @Input() item : any;

    headers : IHeader[];
    items : any[];



    constructor(private catalogService : CatalogService){
    }

    ngOnInit(): void {
        this.headers = this.catalogService.getHeaders();
        this.items = this.catalogService.getItems();
    }

    checkItem() : void {
        this.item.checked = true;
    }
    uncheckItem() : void {
        this.item.checked = false;
    }

}