import { Component } from '@angular/core';

import { CatalogService } from './shared/catalog/catalog.service';
import { ILinkContextMenu } from './component/contextmenu/contextmenu.component';

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    providers: [CatalogService]

})
export class AppComponent {
    public optionsMenu: ILinkContextMenu[];
    constructor(){
        this.optionsMenu = [
            {title: 'Href1', click: ()=>{console.log('ex href1')}},
            {title: 'Href2', click: ()=>{console.log('ex href2')}},
            {title: 'Href235432423423423', click: ()=>{console.log('ex href3')}}
        ]
    }

}