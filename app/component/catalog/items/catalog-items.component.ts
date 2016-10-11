/**
 * Created by Vladimir on 11.10.2016.
 */
import {Component, OnInit, ElementRef} from "@angular/core";

import { CatalogService } from '../../../shared/catalog/catalog.service';
import { IHeader } from "../../../shared/catalog/catalog.header";
import {Event} from "@angular/platform-browser/src/facade/browser";
declare var $ : any;

@Component({
    selector : 'tbody[catalog-items]',
    templateUrl : './app/component/catalog/items/catalog-items.component.html',
    styleUrls: ['./app/component/catalog/items/catalog-items.component.css'],
})
export class CatalogItemsComponent implements OnInit{
    headers : IHeader[];
    items : any[];
    showContextMenu : boolean;
    itemX: number;
    itemY: number;
    $elRef : any;
    $contextMenu : any;


    constructor(private catalogService : CatalogService, private elRef: ElementRef){
        this.showContextMenu = false;

    }

    ngOnInit(): void {
        this.headers = this.catalogService.getHeaders();
        this.items = this.catalogService.getItems();
        this.$elRef = $(this.elRef.nativeElement);
        this.$contextMenu = this.$elRef.find(".context-menu");
        let offset = this.$elRef.offset();
        this.itemX = offset.left;
        this.itemY = offset.top;
        console.log(this.itemX + " " + this.itemY)
    }

    newItem(){
        console.log(this.catalogService.newItem())
    }

    contextMenu(event : any){
        event.preventDefault();
        this.showContextMenu = true;
        this.changeCoordinateContextMenu(event.clientX , event.clientY );
    }

    changeCoordinateContextMenu(x: number, y : number){
        console.log(x + " " + y)
        this.$elRef.find(".context-menu").offset({top : y, left: x});
    }

}