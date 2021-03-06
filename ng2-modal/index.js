"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var Modal_1 = require("./Modal");
var RouteModal_1 = require("./RouteModal");
var core_1 = require("@angular/core");
var common_1 = require('@angular/common');
__export(require("./Modal"));
__export(require("./RouteModal"));
var ModalModule = (function () {
    function ModalModule() {
    }
    ModalModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [
                        Modal_1.Modal,
                        RouteModal_1.RouteModal,
                        Modal_1.ModalHeader,
                        Modal_1.ModalContent,
                        Modal_1.ModalFooter,
                    ],
                    exports: [
                        Modal_1.Modal,
                        RouteModal_1.RouteModal,
                        Modal_1.ModalHeader,
                        Modal_1.ModalContent,
                        Modal_1.ModalFooter,
                    ],
                },] },
    ];
    /** @nocollapse */
    ModalModule.ctorParameters = [];
    return ModalModule;
}());
exports.ModalModule = ModalModule;
//# sourceMappingURL=index.js.map