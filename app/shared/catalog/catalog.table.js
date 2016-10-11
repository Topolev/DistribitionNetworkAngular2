"use strict";
/**
 * Created by Vladimir on 09.10.2016.
 */
var catalog_header_1 = require('./catalog.header');
var CatalogTableCable = (function () {
    function CatalogTableCable() {
        this.typeEquipment = "cabel";
        this.externalName = "cabels";
        this.headers = catalog_header_1.headersCabel;
        this.items = [
            { name: "АС-50", s: "50", r0: 0.125, x0: 0.4 }
        ];
    }
    return CatalogTableCable;
}());
exports.CatalogTableCable = CatalogTableCable;
//# sourceMappingURL=catalog.table.js.map