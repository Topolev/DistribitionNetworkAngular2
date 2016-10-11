/**
 * Created by Vladimir on 09.10.2016.
 */
import {Injectable} from '@angular/core';

import { CatalogTableCable, ICatalogTable } from './catalog.table';
import {IHeader} from "./catalog.header";

@Injectable()
export class CatalogService{
    catalogTable: ICatalogTable;

    constructor(){
        this.catalogTable = new CatalogTableCable();
    }
    getCatalog() : ICatalogTable{
        return this.catalogTable;
    }

    getHeaders(): IHeader[]{
        return this.catalogTable.headers;
    }

    getItems(): any[]{
        return this.catalogTable.items;
    }

    newItem() : void {
        let item = {};
        for (let field of this.catalogTable.headers){
            item[field.innerName] = "";
        }
        this.catalogTable.items.push(item);
    }
}