/**
 * Created by Vladimir on 11.10.2016.
 */
import {Directive, Input, HostListener, ViewChild, AfterViewInit} from "@angular/core";
import {ILinkContextMenu, ContextmenuComponent} from "./contextmenu.component";

@Directive({
    selector : '[context-menu]',
})
export class ContextmenuDirective implements AfterViewInit{
    ngAfterViewInit(): void {

    }
    
    @ViewChild(ContextmenuComponent)
    private contextComponent : ContextmenuComponent;

    @HostListener('contextmenu', ['$event'])
    onContextMenu($event){
        this.contextComponent.showContextMenu($event);
    }
}