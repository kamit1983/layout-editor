"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var RouteModal = (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function RouteModal(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.closeOnEscape = true;
        this.closeOnOutsideClick = true;
        this.hideCloseButton = false;
        // -------------------------------------------------------------------------
        // Outputs
        // -------------------------------------------------------------------------
        this.onOpen = new core_1.EventEmitter(false);
        this.onClose = new core_1.EventEmitter(false);
        this.onSubmit = new core_1.EventEmitter(false);
        this.isOpened = false;
        this.createBackDrop();
    }
    // -------------------------------------------------------------------------
    // Lifecycle Methods
    // -------------------------------------------------------------------------
    RouteModal.prototype.ngOnInit = function () {
        this.open();
    };
    RouteModal.prototype.ngOnDestroy = function () {
        document.body.className = document.body.className.replace(/modal-open\b/, "");
        if (this.backdropElement && this.backdropElement.parentNode === document.body)
            document.body.removeChild(this.backdropElement);
    };
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    RouteModal.prototype.open = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (this.isOpened)
            return;
        this.isOpened = true;
        this.onOpen.emit(args);
        document.body.appendChild(this.backdropElement);
        window.setTimeout(function () { return _this.modalRoot.nativeElement.focus(); }, 0);
        document.body.className += " modal-open";
    };
    RouteModal.prototype.close = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (!this.isOpened)
            return;
        this.isOpened = false;
        this.onClose.emit(args);
        document.body.className = document.body.className.replace(/modal-open\b/, "");
        if (this.cancelUrl) {
            var navigationExtras = {};
            if (this.cancelUrlExtras) {
                if (this.cancelUrlExtras.relative) {
                    navigationExtras.relativeTo = this.activatedRoute;
                }
                navigationExtras = Object.assign(navigationExtras, this.cancelUrlExtras);
            }
            this.router.navigate(this.cancelUrl, navigationExtras);
        }
        else {
            window.history.back();
        }
    };
    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------
    RouteModal.prototype.preventClosing = function (event) {
        event.stopPropagation();
    };
    RouteModal.prototype.createBackDrop = function () {
        this.backdropElement = document.createElement("div");
        this.backdropElement.classList.add("modal-backdrop");
        this.backdropElement.classList.add("fade");
        this.backdropElement.classList.add("in");
    };
    RouteModal.decorators = [
        { type: core_1.Component, args: [{
                    selector: "route-modal",
                    template: "\n<div class=\"modal route-modal\" \n     tabindex=\"-1\"\n     role=\"dialog\"\n     #modalRoot\n     (keydown.esc)=\"closeOnEscape ? close() : 0\"\n     [ngClass]=\"{ in: isOpened, fade: isOpened }\"\n     [ngStyle]=\"{ display: isOpened ? 'block' : 'none' }\"\n     (click)=\"closeOnOutsideClick ? close() : 0\">\n    <div [class]=\"'modal-dialog ' + modalClass\" (click)=\"preventClosing($event)\">\n        <div class=\"modal-content\" tabindex=\"0\" *ngIf=\"isOpened\">\n            <div class=\"modal-header\">\n                <button *ngIf=\"!hideCloseButton\" type=\"button\" class=\"close\" data-dismiss=\"modal\" [attr.aria-label]=\"cancelButtonLabel || 'Close'\" (click)=\"close()\"><span aria-hidden=\"true\">&times;</span></button>\n                <h4 class=\"modal-title\" *ngIf=\"title\">{{ title }}</h4>\n                <ng-content select=\"modal-header\"></ng-content>\n            </div>\n            <div class=\"modal-body\">\n                <ng-content select=\"modal-content\"></ng-content>\n            </div>\n            <div class=\"modal-footer\">\n                <ng-content select=\"modal-footer\"></ng-content>\n                <button *ngIf=\"cancelButtonLabel\" type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"close()\">{{ cancelButtonLabel }}</button>\n                <button *ngIf=\"submitButtonLabel\" type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit.emit(undefined)\">{{ submitButtonLabel }}</button>\n            </div>\n        </div>\n    </div>\n</div>\n"
                },] },
    ];
    /** @nocollapse */
    RouteModal.ctorParameters = [
        { type: router_1.Router, },
        { type: router_1.ActivatedRoute, },
    ];
    RouteModal.propDecorators = {
        'cancelUrl': [{ type: core_1.Input },],
        'cancelUrlExtras': [{ type: core_1.Input },],
        'modalClass': [{ type: core_1.Input },],
        'closeOnEscape': [{ type: core_1.Input },],
        'closeOnOutsideClick': [{ type: core_1.Input },],
        'title': [{ type: core_1.Input },],
        'hideCloseButton': [{ type: core_1.Input },],
        'cancelButtonLabel': [{ type: core_1.Input },],
        'submitButtonLabel': [{ type: core_1.Input },],
        'onOpen': [{ type: core_1.Output },],
        'onClose': [{ type: core_1.Output },],
        'onSubmit': [{ type: core_1.Output },],
        'modalRoot': [{ type: core_1.ViewChild, args: ["modalRoot",] },],
    };
    return RouteModal;
}());
exports.RouteModal = RouteModal;
//# sourceMappingURL=RouteModal.js.map