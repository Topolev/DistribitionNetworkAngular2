/**
 * Created by Vladimir on 11.10.2016.
 */
import {Component, OnInit} from "@angular/core";

import { CatalogService } from '../../../shared/catalog/catalog.service';
import { IHeader } from "../../../shared/catalog/catalog.header";

@Component({
    selector : 'thead[catalog-headers]',
    templateUrl : './app/component/catalog/headers/catalgo-headers.component.html'
})
export class CatalogHeadersComponent implements OnInit{
    headers : IHeader[];


    constructor(private catalogService : CatalogService){
    }

    ngOnInit(): void {
        this.headers = this.catalogService.getHeaders();
    }

}