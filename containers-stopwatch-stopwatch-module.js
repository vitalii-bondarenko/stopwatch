(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["containers-stopwatch-stopwatch-module"],{

/***/ "./src/app/containers/stopwatch/stopwatch.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/containers/stopwatch/stopwatch.component.ts ***!
  \*************************************************************/
/*! exports provided: StopwatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopwatchComponent", function() { return StopwatchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function StopwatchComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StopwatchComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.start(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Start \uD83C\uDFC1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StopwatchComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StopwatchComponent_ng_template_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.stop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Stop \uD83D\uDEAB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class StopwatchComponent {
    constructor() {
        this.floor = Math.floor;
        this.seconds = 0;
        this.$ticker = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000);
        this.$waitButton = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.subscribeToWaitButton();
    }
    start() {
        if (!this.$sub || this.$sub.closed) {
            this.$sub = this.$ticker.subscribe(_ => this.seconds++);
        }
    }
    stop() {
        this.seconds = 0;
        this.wait();
    }
    wait() {
        if (this.$sub) {
            this.$sub.unsubscribe();
        }
    }
    reset() {
        this.seconds = 0;
        this.start();
    }
    subscribeToWaitButton() {
        this.$waitButton.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_ => new Date().getTime()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["bufferCount"])(2, 1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(timestamps => timestamps[1] - timestamps[0] < 300)).subscribe(_ => this.wait());
    }
}
StopwatchComponent.ɵfac = function StopwatchComponent_Factory(t) { return new (t || StopwatchComponent)(); };
StopwatchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StopwatchComponent, selectors: [["app-stopwatch"]], decls: 23, vars: 14, consts: [[1, "background"], [1, "wrapper"], [1, "time"], [1, "control-panel"], [3, "click", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [3, "click"]], template: function StopwatchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, StopwatchComponent_button_14_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, StopwatchComponent_ng_template_15_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StopwatchComponent_Template_button_click_18_listener() { return ctx.$waitButton.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Wait");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StopwatchComponent_Template_button_click_21_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 5, ctx.floor(ctx.seconds / 3600), "2."), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 8, ctx.floor(ctx.seconds / 60), "2."), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 11, ctx.seconds % 60, "2."), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.$sub || ctx.$sub.closed)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]], styles: [".background[_ngcontent-%COMP%] {\n  background-color: #e5e4e4;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  max-width: 700px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0 auto;\n}\n\n.wrapper[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.wrapper[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 100px;\n  font-weight: 500;\n}\n\n.wrapper[_ngcontent-%COMP%]   .control-panel[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: stretch;\n  list-style: none;\n}\n\n.wrapper[_ngcontent-%COMP%]   .control-panel[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.wrapper[_ngcontent-%COMP%]   .control-panel[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  text-transform: uppercase;\n  font-size: 20px;\n  font-weight: 700;\n  color: #000;\n}\n\n.wrapper[_ngcontent-%COMP%]   .control-panel[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #262626;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy9zdG9wd2F0Y2gvc3RvcHdhdGNoLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBRUEsY0FBQTtBQURGOztBQUdFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBREo7O0FBR0k7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBRE47O0FBS0U7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7RUFFQSxnQkFBQTtBQUpKOztBQU1JO0VBQ0UsV0FBQTtBQUpOOztBQU1NO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLFlBQUE7RUFFQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFQUjs7QUFTUTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQVBWIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVycy9zdG9wd2F0Y2gvc3RvcHdhdGNoLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTRlNDtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIG1heC13aWR0aDogNzAwcHg7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICYgLnRpbWUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgJiBzcGFuIHtcclxuICAgICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgLmNvbnRyb2wtcGFuZWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcclxuXHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxuICAgICYgbGkge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICYgYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StopwatchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stopwatch',
                templateUrl: 'stopwatch.html',
                styleUrls: ['stopwatch.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/containers/stopwatch/stopwatch.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/containers/stopwatch/stopwatch.module.ts ***!
  \**********************************************************/
/*! exports provided: StopwatchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopwatchModule", function() { return StopwatchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _stopwatch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stopwatch.component */ "./src/app/containers/stopwatch/stopwatch.component.ts");
/* harmony import */ var _stopwatch_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stopwatch.routing */ "./src/app/containers/stopwatch/stopwatch.routing.ts");





class StopwatchModule {
}
StopwatchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StopwatchModule });
StopwatchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StopwatchModule_Factory(t) { return new (t || StopwatchModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _stopwatch_routing__WEBPACK_IMPORTED_MODULE_3__["StopwatchRouting"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StopwatchModule, { declarations: [_stopwatch_component__WEBPACK_IMPORTED_MODULE_2__["StopwatchComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _stopwatch_routing__WEBPACK_IMPORTED_MODULE_3__["StopwatchRouting"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StopwatchModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_stopwatch_component__WEBPACK_IMPORTED_MODULE_2__["StopwatchComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _stopwatch_routing__WEBPACK_IMPORTED_MODULE_3__["StopwatchRouting"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/containers/stopwatch/stopwatch.routing.ts":
/*!***********************************************************!*\
  !*** ./src/app/containers/stopwatch/stopwatch.routing.ts ***!
  \***********************************************************/
/*! exports provided: StopwatchRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopwatchRouting", function() { return StopwatchRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _stopwatch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stopwatch.component */ "./src/app/containers/stopwatch/stopwatch.component.ts");





const routes = [
    {
        path: '',
        component: _stopwatch_component__WEBPACK_IMPORTED_MODULE_2__["StopwatchComponent"]
    }
];
class StopwatchRouting {
}
StopwatchRouting.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StopwatchRouting });
StopwatchRouting.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StopwatchRouting_Factory(t) { return new (t || StopwatchRouting)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StopwatchRouting, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StopwatchRouting, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=containers-stopwatch-stopwatch-module.js.map