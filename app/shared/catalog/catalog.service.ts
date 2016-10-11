/**
 * Created by Vladimir on 09.10.2016.
 */
import {Injectable} from '@angular/core';

import { CatalogTableCable, ICatalogTable } from './catalog.table';
import {IHeader} from "./catalog.header";
import indexOf = require("core-js/fn/array/index-of");

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
        item["checked"] = false;
        this.catalogTable.items.push(item);
    }

    deleteCheckedItem() : void {
        let items = this.catalogTable.items;
        for (let i = 0; i < items.length; i++){
            if (items[i]["checked"] == true){
                items.splice(i,1);
                i--;
            }
        }
    }
    checkAllItem(): void {
        for (let item of this.catalogTable.items){
            item["checked"] = true;
        }
    }
    uncheckAllItem():void{
        for (let item of this.catalogTable.items){
            item["checked"] = false;
        }
    }
}