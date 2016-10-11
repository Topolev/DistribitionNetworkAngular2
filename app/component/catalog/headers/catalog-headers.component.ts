/**
 * Created by Vladimir on 11.10.2016.
 */
import {Component, OnInit, ViewChild} from "@angular/core";

import { CatalogService } from '../../../shared/catalog/catalog.service';
import { IHeader } from "../../../shared/catalog/catalog.header";
import { CatalogItemComponent } from "../item/catalog-item.component";


@Component({
    selector : 'thead[catalog-headers]',
    templateUrl : './app/component/catalog/headers/catalgo-headers.component.html'
})
export class CatalogHeadersComponent implements OnInit{

    @ViewChild(CatalogItemComponent)
        private itemComponent : CatalogItemComponent;

    headers : IHeader[];
    checkAll : boolean;

    constructor(private catalogService : CatalogService){
        this.checkAll = false;
    }

    ngOnInit(): void {
        this.headers = this.catalogService.getHeaders();
    }
    onChangeStateCheckItem(){
        if (this.checkAll) {
            this.catalogService.uncheckAllItem();
        } else{
            this.catalogService.checkAllItem();
        }
    }

}