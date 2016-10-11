/**
 * Created by Vladimir on 09.10.2016.
 */
import {IHeader, headersCabel} from './catalog.header';

export interface ICatalogTable{
    typeEquipment : string;
    externalName: string;
    headers: IHeader[];
    items: any[];
}

export class CatalogTableCable implements  ICatalogTable{
    typeEquipment: string;
    externalName: string;
    headers: IHeader[];
    items: any[];
    constructor(){
        this.typeEquipment = "cabel";
        this.externalName = "cabels";
        this.headers = headersCabel;
        this.items = [
            {name : "АС-50", s:"50", r0: 0.125, x0 : 0.4}
        ];
    }

}

