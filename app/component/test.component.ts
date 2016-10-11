/**
 * Created by Vladimir on 09.10.2016.
 */

import {Component} from "@angular/core";
@Component({
    selector : 'app',
    template : `
        <h1>{{contact.firstName}}</h1>
        <input [(ngModel)] = "contact.firstName"/>
    `
})
export class TestComponent{
    public contact = {firstName : "Petya"};
}
