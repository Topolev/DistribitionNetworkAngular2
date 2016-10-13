/**
 * Created by Vladimir on 11.10.2016.
 */

import {Component, Input, ElementRef, Renderer, OnInit, HostListener} from '@angular/core';
declare var $ : any;

export interface ILinkContextMenu{
    title : string,
    click : () => void
}


@Component({
    selector : 'context-menu',
    template: `
        <a href="#" (contextmenu) = "showContextMenu($event)">Show context menu</a>
        <ul class="context-menu">
            <li *ngFor = "let link of links">
                <a (click) = "executeLink(link, $event)">{{link.title}}</a>
            </li>
        </ul>
    `,
    styleUrls: ['./app/component/contextmenu/contextmenu.component.css']
})
export class ContextmenuComponent implements OnInit{

    @Input() links : ILinkContextMenu[];

    contextMenu : any;

    constructor(private element : ElementRef,
                private renderer : Renderer){
    }
    ngOnInit(): void {
        this.contextMenu = $(this.element.nativeElement).find('.context-menu');
        this.contextMenu.css('display', 'none');
    }

    executeLink(link : ILinkContextMenu, $event : MouseEvent){
        link.click();
        this.closeContextMenu($event);
        $event.preventDefault();
    }

    showContextMenu($event : MouseEvent){
        this.contextMenu.css('display', 'inline-block');
        this.contextMenu.offset({top : $event.clientY, left : $event.clientX});
        console.log($event.clientX + " " + $event.clientY);
        $event.preventDefault();
    }
    closeContextMenu($event : MouseEvent){
        this.contextMenu.css('display', 'none');
        $event.preventDefault();
    }

    @HostListener('document:click', ['$event'])
        public onClick($event : MouseEvent) {
            const clickedInside = this.element.nativeElement.contains($event.target);
            if (!clickedInside) {
                this.closeContextMenu($event);
            }
    }


}
