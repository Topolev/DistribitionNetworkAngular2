import { Component } from '@angular/core';

import { CatalogService } from './shared/catalog/catalog.service';

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    providers: [CatalogService]

})
export class AppComponent {
}