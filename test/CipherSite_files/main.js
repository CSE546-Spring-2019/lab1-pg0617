webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\r\n          data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n          aria-expanded=\"false\" aria-label=\"Toggle navigation\"\r\n           (click)=\"toggleCollapsed()\">\r\n  <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div id=\"navbarSupportedContent\" [ngClass]=\"{'collapse': collapsed, 'navbar-collapse': true}\">\r\n    <ul class=\"navbar-nav text-center\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/\">Home</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n      <a class=\"nav-link\" routerLink=\"/shiftcipher\">shift cipher</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" routerLink=\"/textanalysis\">monoalphabetic cipher & <br> text analysis</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" routerLink=\"/vigenerecracker\">vigenere cipher</a>\r\n    </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/playfair\">playfair</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/transposition\">transposition</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.collapsed = true;
    }
    AppComponent.prototype.toggleCollapsed = function () {
        this.collapsed = !this.collapsed;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_service__ = __webpack_require__("../../../../../src/app/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shift_cypher_shift_cypher_component__ = __webpack_require__("../../../../../src/app/shift-cypher/shift-cypher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__landing_page_landing_page_component__ = __webpack_require__("../../../../../src/app/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__letter_frequency_letter_frequency_component__ = __webpack_require__("../../../../../src/app/letter-frequency/letter-frequency.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngrams_ngrams_component__ = __webpack_require__("../../../../../src/app/ngrams/ngrams.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__text_analysis_text_analysis_component__ = __webpack_require__("../../../../../src/app/text-analysis/text-analysis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngraph_graph_ngraph_graph_component__ = __webpack_require__("../../../../../src/app/ngraph-graph/ngraph-graph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__vigenere_vigenere_component__ = __webpack_require__("../../../../../src/app/vigenere/vigenere.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__playfair_playfair_component__ = __webpack_require__("../../../../../src/app/playfair/playfair.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__transposition_transposition_component__ = __webpack_require__("../../../../../src/app/transposition/transposition.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: 'shiftcipher', component: __WEBPACK_IMPORTED_MODULE_6__shift_cypher_shift_cypher_component__["a" /* ShiftCypherComponent */] },
    { path: 'textanalysis', component: __WEBPACK_IMPORTED_MODULE_11__text_analysis_text_analysis_component__["a" /* TextAnalysisComponent */] },
    { path: 'vigenerecracker', component: __WEBPACK_IMPORTED_MODULE_13__vigenere_vigenere_component__["a" /* VigenereComponent */] },
    { path: 'playfair', component: __WEBPACK_IMPORTED_MODULE_14__playfair_playfair_component__["a" /* PlayfairComponent */] },
    { path: 'transposition', component: __WEBPACK_IMPORTED_MODULE_15__transposition_transposition_component__["a" /* TranspositionComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__landing_page_landing_page_component__["a" /* LandingPageComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_8__landing_page_landing_page_component__["a" /* LandingPageComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__shift_cypher_shift_cypher_component__["a" /* ShiftCypherComponent */],
                __WEBPACK_IMPORTED_MODULE_8__landing_page_landing_page_component__["a" /* LandingPageComponent */],
                __WEBPACK_IMPORTED_MODULE_9__letter_frequency_letter_frequency_component__["a" /* LetterFrequencyComponent */],
                __WEBPACK_IMPORTED_MODULE_10__ngrams_ngrams_component__["a" /* NgramsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__text_analysis_text_analysis_component__["a" /* TextAnalysisComponent */],
                __WEBPACK_IMPORTED_MODULE_12__ngraph_graph_ngraph_graph_component__["a" /* NgraphGraphComponent */],
                __WEBPACK_IMPORTED_MODULE_13__vigenere_vigenere_component__["a" /* VigenereComponent */],
                __WEBPACK_IMPORTED_MODULE_14__playfair_playfair_component__["a" /* PlayfairComponent */],
                __WEBPACK_IMPORTED_MODULE_15__transposition_transposition_component__["a" /* TranspositionComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__utils_service__["a" /* UtilsService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card content\">\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        Work in progress site for code breaking\n        <br>\n        https://github.com/jeffj6123/codebreaking3801\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__("../../../../../src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing-page/landing-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/letter-frequency/letter-frequency.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/letter-frequency/letter-frequency.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%; height:100%;\">\n    <canvas baseChart\n            [datasets]=\"barChartData\"\n            [labels]=\"barChartLabels\"\n            [options]=\"barChartOptions\"\n            [legend]=\"barChartLegend\"\n            [chartType]=\"barChartType\"\n            (chartHover)=\"chartHovered($event)\"\n            (chartClick)=\"chartClicked($event)\">\n    </canvas>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/letter-frequency/letter-frequency.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LetterFrequencyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_service__ = __webpack_require__("../../../../../src/app/utils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LetterFrequencyComponent = /** @class */ (function () {
    function LetterFrequencyComponent(utils) {
        this.utils = utils;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            animation: false
        };
        this.barChartLabels = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [{ data: [], label: 'Letter Frequency' }, { data: [], label: ' standard Letter Frequency' }];
    }
    LetterFrequencyComponent.prototype.ngOnInit = function () {
    };
    LetterFrequencyComponent.prototype.ngOnChanges = function (changes) {
        if (changes.letterFrequencyDict) {
            this.letterFrequencyDict = changes.letterFrequencyDict.currentValue;
            this.generateGraphs();
        }
        if (changes.letterFrequencyList) {
            this.letterFrequencyList = changes.letterFrequencyList.currentValue;
            var alphabet = this.utils.alphabet;
            var standardLetterFrequencyData = [];
            var standardLetterFrequencyDict = this.utils.standardLetterFrequencyDict;
            for (var i = 0; i < alphabet.length; i++) {
                standardLetterFrequencyData.push(standardLetterFrequencyDict[alphabet[i]]);
            }
            this.barChartData = [{ data: this.letterFrequencyList, label: 'Letter Frequency' }, { data: standardLetterFrequencyData, label: 'standard Letter Frequency' }];
        }
    };
    LetterFrequencyComponent.prototype.generateGraphs = function () {
        var standardLetterFrequencyDict = this.utils.standardLetterFrequencyDict;
        var alphabet = this.utils.alphabet;
        var LetterFrequencyData = [];
        var standardLetterFrequencyData = [];
        for (var i = 0; i < alphabet.length; i++) {
            LetterFrequencyData.push(this.letterFrequencyDict[alphabet[i]]);
            standardLetterFrequencyData.push(standardLetterFrequencyDict[alphabet[i]]);
        }
        this.barChartData = [{ data: LetterFrequencyData, label: 'Letter Frequency' }, { data: standardLetterFrequencyData, label: 'standard Letter Frequency' }];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LetterFrequencyComponent.prototype, "letterFrequencyDict", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LetterFrequencyComponent.prototype, "letterFrequencyList", void 0);
    LetterFrequencyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-letter-frequency',
            template: __webpack_require__("../../../../../src/app/letter-frequency/letter-frequency.component.html"),
            styles: [__webpack_require__("../../../../../src/app/letter-frequency/letter-frequency.component.css")]
        })
        /*
          Generates a barChart to display letter frequency side by side with standard letter frequency
        
          letterFrequencyDict should be a dict of  { letter : percentage freq  }
         */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__utils_service__["a" /* UtilsService */]])
    ], LetterFrequencyComponent);
    return LetterFrequencyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ngrams/ngrams.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ngrams/ngrams.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  ngrams works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/ngrams/ngrams.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgramsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_service__ = __webpack_require__("../../../../../src/app/utils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgramsComponent = /** @class */ (function () {
    function NgramsComponent(utils) {
        this.utils = utils;
        this.text = '';
        this.nGrams = [];
    }
    NgramsComponent.prototype.ngOnInit = function () {
    };
    NgramsComponent.prototype.analyize = function () {
        var copyText = this.text;
        copyText = copyText.replace(/\r?\n?/g, '');
        copyText = copyText.trim();
        // var nGramsList = this.utils.generateNGramDictionary(copyText,[2,3]);
        var nGramsList = [];
        this.nGrams = [];
        for (var i = 0; i < nGramsList.length; i++) {
            var g = { name: nGramsList[i].size, entries: [] };
            for (var j = 0; j < nGramsList[i].grams.length; j++) {
                g.entries.push({ name: nGramsList[i].size, frequency: nGramsList[i].grams[j] / nGramsList[i].grams[nGramsList[i].mostFrequent] });
            }
            g.entries.sort(function (a, b) {
                return a.frequency > b.frequency ? -1 : 1;
            });
            this.nGrams.push(g);
        }
        // console.log(this.utils.generateNGramDictionary(copyText,[2,3]));
    };
    NgramsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ngrams',
            template: __webpack_require__("../../../../../src/app/ngrams/ngrams.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ngrams/ngrams.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__utils_service__["a" /* UtilsService */]])
    ], NgramsComponent);
    return NgramsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ngraph-graph/ngraph-graph.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ngraph-graph/ngraph-graph.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  ngraph-graph works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/ngraph-graph/ngraph-graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgraphGraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NgraphGraphComponent = /** @class */ (function () {
    function NgraphGraphComponent() {
    }
    NgraphGraphComponent.prototype.ngOnInit = function () {
    };
    NgraphGraphComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ngraph-graph',
            template: __webpack_require__("../../../../../src/app/ngraph-graph/ngraph-graph.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ngraph-graph/ngraph-graph.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NgraphGraphComponent);
    return NgraphGraphComponent;
}());



/***/ }),

/***/ "../../../../../src/app/playfair/playfair.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".playfair-block {\r\n  text-align: center;\r\n  display: inline-block;\r\n  padding-left: 4px;\r\n  padding-right: 4px;\r\n  font-family: \"Courier New\", Courier, \"Lucida Sans Typewriter\", \"Lucida Typewriter\", monospace;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/playfair/playfair.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container no-margin-check times\">\n  <div class=\"card content\">\n    <div class=\"card-body\">\n      <div class=\" row\">\n        <div class=\"col-sm-3\">\n          <div class=\"form-group\">\n            <h2 class=\"text-center\">Text</h2>\n            <textarea [(ngModel)]=\"text\" class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"10\"></textarea>\n            <button (click)=\"analyze()\" type=\"button\" class=\" text-center btn btn-outline-primary\">Analyze</button>\n\n          </div>\n\n\n        </div>\n        <div class=\"col-sm-9\">\n          <h3>{{ showDecipheredText ? 'Deciphered Text' : 'Replaced Text' }}\n            <span>\n            <button (click)=\"changeShowDecipheredText()\" type=\"button\" class=\" text-center btn btn-outline-primary\">\n              {{ showDecipheredText ? 'Show Text replace' : 'Show Deciphered Text' }}\n            </button>\n          </span></h3>\n          <div *ngIf=\"showDecipheredText\" class=\"replaced-text\">\n            {{decipheredText}}\n          </div>\n          <div *ngIf=\"!showDecipheredText\" class=\"replaced-text\" [innerHTML]=\"highLightedText\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card content\" *ngIf=\"grid.length > 0\">\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-sm-4\">\n          <table class=\"table table-bordered text-center\">\n            <thead>\n            <tr>\n              <th></th>\n              <th></th>\n              <th *ngFor=\"let row of grid; let i = index\">\n                <button (click)=\"selectToShift(i,false)\" type=\"button\" class=\" text-center btn btn-outline-primary\">s\n                </button>\n\n                <button (click)=\"shiftColumnUp(i)\" type=\"button\" class=\" text-center btn btn-outline-primary\">{{'^'}}\n                </button>\n              </th>\n              <th></th>\n            </tr>\n            </thead>\n            <tbody>\n\n            <tr *ngFor=\"let row of grid; let i = index\">\n              <td>\n                <button (click)=\"selectToShift(i,true)\" type=\"button\" class=\" text-center btn btn-outline-primary\">s\n                </button>\n              </td>\n              <td>\n                <button (click)=\"shiftRow(i,1)\" type=\"button\" class=\" text-center btn btn-outline-primary\">{{'<'}}\n                </button>\n              </td>\n              <td *ngFor=\"let cell of row; let j = index\">\n                <input class=\"ng-pristine ng-valid ng-touched\" [(ngModel)]=\"grid[i][j]\" type=\"text\"\n                       [attr.id]=\"i + '  ' + j\"\n                       minlength=\"1\" maxlength=\"1\" size=\"1\" (keydown)=\"replace(i,j)\"></td>\n              <button (click)=\"shiftRow(i,-1)\" type=\"button\" class=\" text-center btn btn-outline-primary\">{{'>'}}\n              </button>\n            </tr>\n            <tr>\n              <td></td>\n              <td></td>\n              <td *ngFor=\"let row of grid; let i = index\">\n                <button (click)=\"shiftColumnDown(i)\" type=\"button\" class=\" text-center btn btn-outline-primary\">\n                  {{'v'}}\n                </button>\n              </td>\n              <td></td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"col-sm-8\">\n          <div class=\"col-xs-12\">\n            <h5>Shift key</h5>\n            <button (click)=\"fullShiftUp()\" type=\"button\" class=\" text-center btn btn-outline-primary\">shift up</button>\n            <button (click)=\"fullShiftDown()\" type=\"button\" class=\" text-center btn btn-outline-primary\">shift down\n            </button>\n            <button (click)=\"fullRotate(1)\" type=\"button\" class=\" text-center btn btn-outline-primary\">shift left\n            </button>\n            <button (click)=\"fullRotate(-1)\" type=\"button\" class=\" text-center btn btn-outline-primary\">shift right\n            </button>\n          </div>\n          <div class=\"col-sm-12\" style=\"padding-top: 15px;\">\n            <h5>Import key</h5>\n            <input type=\"text\" maxlength=\"25\" #keyImport/>\n            <button (click)=\"importKey(keyImport.value, true)\" type=\"button\"\n                    class=\" text-center btn btn-outline-primary\">Import\n            </button>\n          </div>\n          <div class=\"col-sm-12\">\n            <h5>Save state</h5>\n            <div>\n              <label> Name : </label>\n              <input type=\"text\" [(ngModel)]=\"newStateName\"/>\n            </div>\n            <div>\n              <label> Description : </label>\n              <textarea [(ngModel)]=\"newStateDescription\" class=\"form-control\" rows=\"3\" cols=\"10\"></textarea>\n            </div>\n            <div>\n              <button (click)=\"saveState()\" type=\"button\" class=\" text-center btn btn-outline-primary\">Save</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card content\" *ngIf=\"statesList.length > 0\">\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-sm-4\" *ngFor=\"let state of statesList; let stateIndex = index\">\n          <h4>{{state.name}}</h4>\n          <p>{{state.description}}</p>\n          <table class=\"table table-bordered text-center\">\n            <tbody>\n            <tr *ngFor=\"let row of state.grid; let i = index\">\n              <td *ngFor=\"let cell of row; let j = index\"> {{state.grid[i][j]}}</td>\n            </tr>\n            </tbody>\n          </table>\n          <button (click)=\"restoreState(stateIndex)\" type=\"button\" class=\" text-center btn btn-outline-success\">\n            Restore\n          </button>\n          <button (click)=\"deleteState(stateIndex)\" type=\"button\"\n                  class=\" text-center btn btn-danger btn-outline-danger\">Delete\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card content\">\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <h3>FAQ</h3>\n          <p>\n            Start by entering the cipher text in the text field and hitting analyze.\n            <br>\n            You are able to change between block deciphered text and a break down of how text was replaced.\n            <br>\n            After having hit analyze you have the options of shifting columns and rows using the '<' keys.\n            <br>\n            You can swap rows by hitting the S key on two columns/rows.\n            <br>\n            You can move the entire grid using the shift down/left/up/right keys to better align your key.\n            <br>\n            You can import a key which will use the i/j replacement assumption.\n            <br>\n            You can save a state which is a current grid layout with a description/name and upon saving it you can set the current\n            grid back to it at any point by hitting restore.\n\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/playfair/playfair.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayfairComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_service__ = __webpack_require__("../../../../../src/app/utils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlayfairComponent = /** @class */ (function () {
    function PlayfairComponent(utils, applicationRef, cdr) {
        this.utils = utils;
        this.applicationRef = applicationRef;
        this.cdr = cdr;
        this.text = '';
        this.textCopy = '';
        this.highLightedText = '';
        this.grid = [];
        this.row = false;
        this.swap = -1;
        this.showDecipheredText = false;
        this.decipheredText = '';
        this.statesList = [];
        this.newStateName = '';
        this.newStateDescription = '';
    }
    PlayfairComponent.prototype.ngOnInit = function () {
    };
    PlayfairComponent.prototype.changeShowDecipheredText = function () {
        this.showDecipheredText = !this.showDecipheredText;
    };
    PlayfairComponent.prototype.analyze = function () {
        this.textCopy = this.utils.stripWhiteSpaceAndFormatting(this.text);
        this.highLightedText = this.textCopy;
        this.grid = this.generateGrid();
    };
    PlayfairComponent.prototype.chunk = function (str, length) {
        return str.match(new RegExp('.{1,' + length + '}', 'g'));
    };
    PlayfairComponent.prototype.decipherTuple = function (grid, quickLookDictionary, text) {
        var left = text.charAt(0);
        var right = text.charAt(1);
        var leftCoord = { x: -2, y: -2 };
        var rightCoord = { x: -3, y: -3 };
        if (left in quickLookDictionary) {
            leftCoord = quickLookDictionary[left];
        }
        else {
            return '--';
        }
        if (right in quickLookDictionary) {
            rightCoord = quickLookDictionary[right];
        }
        else {
            return '--';
        }
        //same row
        if (leftCoord.y === rightCoord.y) {
            var leftPos = leftCoord.x === 0 ? 4 : leftCoord.x - 1;
            var rightPos = rightCoord.x === 0 ? 4 : rightCoord.x - 1;
            var newLeft = grid[leftCoord.y][leftPos];
            var newRight = grid[leftCoord.y][rightPos];
            var front = newLeft.length === 0 ? '-' : newLeft;
            var back = newRight.length === 0 ? '-' : newRight;
            return front + back;
        }
        else if (leftCoord.x === rightCoord.x) {
            var leftPos = leftCoord.y === 0 ? 4 : leftCoord.y - 1;
            var rightPos = rightCoord.y === 0 ? 4 : rightCoord.y - 1;
            var newLeft = grid[leftPos][leftCoord.x];
            var newRight = grid[rightPos][leftCoord.x];
            var front = newLeft.length === 0 ? '-' : newLeft;
            var back = newRight.length === 0 ? '-' : newRight;
            return front + back;
        }
        else {
            var corner1 = grid[leftCoord.y][rightCoord.x];
            var corner2 = grid[rightCoord.y][leftCoord.x];
            var front = corner1.length === 0 ? '-' : corner1;
            var back = corner2.length === 0 ? '-' : corner2;
            return front + back;
        }
    };
    PlayfairComponent.prototype.replace = function (x, y) {
        var _this = this;
        if (x === void 0) { x = -1; }
        if (y === void 0) { y = -1; }
        setTimeout(function () {
            var changedChar = '  ';
            if (x >= 0 && y >= 0) {
                changedChar = _this.grid[x][y];
            }
            var validChar = _this.utils.isLetter(changedChar);
            var replaceKey = {};
            for (var i = 0; i < _this.grid.length; i++) {
                for (var j = 0; j < _this.grid[i].length; j++) {
                    if (_this.grid[j][i].toUpperCase() === changedChar.toUpperCase() && (j !== x || i !== y)) {
                        _this.grid[j][i] = '-';
                    }
                    if (_this.grid[j][i] != '-') {
                        replaceKey[_this.grid[j][i].toUpperCase()] = { x: i, y: j };
                    }
                    document.getElementById(i + '  ' + j)['value'] = _this.grid[i][j];
                }
            }
            var decipheredText = '';
            var replacedText = '';
            var chunks = _this.chunk(_this.textCopy, 2);
            for (var i = 0; i < chunks.length; i++) {
                var decipheredChunk = _this.decipherTuple(_this.grid, replaceKey, chunks[i]).toUpperCase();
                decipheredText += decipheredChunk;
                if (validChar &&
                    (decipheredChunk.charAt(0) === changedChar.toUpperCase() ||
                        decipheredChunk.charAt(1) === changedChar.toUpperCase() ||
                        chunks[i].charAt(0) === changedChar.toUpperCase() ||
                        chunks[i].charAt(1) === changedChar.toUpperCase()) &&
                    (_this.utils.isLetter(decipheredChunk.charAt(0)) || _this.utils.isLetter(decipheredChunk.charAt(1)))) {
                    decipheredChunk = "<span class='selected-text'>" + decipheredChunk + "</span>";
                }
                replacedText += "<div class='playfair-block'>" + chunks[i] + "<div>" + decipheredChunk + "</div></div>";
            }
            _this.decipheredText = decipheredText;
            _this.highLightedText = replacedText;
        }, 0);
    };
    PlayfairComponent.prototype.generateGrid = function () {
        var hold = [];
        var x = 0;
        for (var i = 0; i < 5; i++) {
            var row = [];
            for (var j = 0; j < 5; j++) {
                row.push('');
                x++;
            }
            hold.push(row);
        }
        return hold;
    };
    PlayfairComponent.prototype.selectToShift = function (index, isRow) {
        if (this.row == isRow) {
            if (this.swap > -1) {
                if (this.row) {
                    this.swapRow(this.swap, index);
                }
                else {
                    this.swapColumn(this.swap, index);
                }
                this.swap = -1;
            }
            else {
                this.swap = index;
            }
        }
        else {
            this.row = isRow;
            this.swap = index;
        }
    };
    PlayfairComponent.prototype.arrayRotate = function (arr, count) {
        count -= arr.length * Math.floor(count / arr.length);
        arr.push.apply(arr, arr.splice(0, count));
        return arr;
    };
    PlayfairComponent.prototype.fullRotate = function (shiftAmount) {
        for (var i = 0; i < this.grid.length; i++) {
            this.shiftRow(i, shiftAmount);
        }
        this.replace();
    };
    PlayfairComponent.prototype.shiftRow = function (row, shitAmount) {
        this.arrayRotate(this.grid[row], shitAmount);
        this.replace();
    };
    PlayfairComponent.prototype.fullShiftUp = function () {
        for (var i = 0; i < this.grid.length; i++) {
            this.shiftColumnUp(i);
        }
    };
    PlayfairComponent.prototype.fullShiftDown = function () {
        for (var i = 0; i < this.grid.length; i++) {
            this.shiftColumnDown(i);
        }
    };
    PlayfairComponent.prototype.shiftColumnUp = function (index) {
        var first = this.grid[0][index];
        for (var i = 0; i < this.grid.length - 1; i++) {
            this.grid[i][index] = this.grid[i + 1][index];
        }
        this.grid[this.grid.length - 1][index] = first;
        this.replace();
    };
    PlayfairComponent.prototype.shiftColumnDown = function (index) {
        var first = this.grid[this.grid.length - 1][index];
        for (var i = this.grid.length - 1; i > 0; i--) {
            this.grid[i][index] = this.grid[i - 1][index];
        }
        this.grid[0][index] = first;
        this.replace();
    };
    PlayfairComponent.prototype.swapColumn = function (index1, index2) {
        for (var i = 0; i < this.grid.length; i++) {
            var hold = this.grid[i][index1];
            this.grid[i][index1] = this.grid[i][index2];
            this.grid[i][index2] = hold;
        }
        this.replace();
    };
    PlayfairComponent.prototype.swapRow = function (index1, index2) {
        var hold = this.grid[index1];
        this.grid[index1] = this.grid[index2];
        this.grid[index2] = hold;
        this.replace();
    };
    PlayfairComponent.prototype.importKey = function (key, fill) {
        var importedKey = this.utils.uniqueString(key.toUpperCase());
        var splitKey = importedKey.split('');
        var alphabet = 'a,b,c,d,e,f,g,h,i,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'.toUpperCase().split(',');
        if (fill) {
            for (var i = 0; i < alphabet.length; i++) {
                if (!splitKey.includes(alphabet[i])) {
                    splitKey.push(alphabet[i]);
                }
            }
        }
        this.grid = this.generateGrid();
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 5; j++) {
                this.grid[i][j] = splitKey[i * 5 + j];
            }
        }
        this.replace();
    };
    PlayfairComponent.prototype.saveState = function () {
        var newGrid = this.generateGrid();
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 5; j++) {
                if (!this.grid[i][j].length || this.grid[i][j].length === 0) {
                    newGrid[i][j] = '-';
                }
                else {
                    newGrid[i][j] = this.grid[i][j];
                }
            }
        }
        this.statesList.push({
            name: this.newStateName,
            description: this.newStateDescription,
            grid: newGrid
        });
        this.newStateName = '';
        this.newStateDescription = '';
    };
    PlayfairComponent.prototype.restoreState = function (stateIndex) {
        this.grid = this.statesList[stateIndex].grid;
        this.replace();
    };
    PlayfairComponent.prototype.deleteState = function (stateIndex) {
        this.statesList.splice(stateIndex, 1);
    };
    PlayfairComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-playfair',
            template: __webpack_require__("../../../../../src/app/playfair/playfair.component.html"),
            styles: [__webpack_require__("../../../../../src/app/playfair/playfair.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__utils_service__["a" /* UtilsService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], PlayfairComponent);
    return PlayfairComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shift-cypher/shift-cypher.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shift-cypher/shift-cypher.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card content\">\n    <div class=\"card-body\">\n      <div class=\" row\">\n        <div class=\"col-sm-4\">\n          <div class=\"form-group\">\n\n            <h2 class=\"text-center\">Text to shift</h2>\n            <textarea [(ngModel)]=\"text\" class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"10\"></textarea>\n          </div>\n          <div class=\"input-group\">\n            <label>characters to shift : </label>\n            <input [(ngModel)]=\"charactersToShow\" type=\"number\" class=\"form-control\">\n          </div>\n          <div class=\"form-check\">\n            <label class=\"form-check-label\">\n              <input  [(ngModel)]=\"preserveWhiteSpace\"  class=\"form-check-input\" type=\"checkbox\" value=\"\">\n              Preserve white space\n            </label>\n          </div>\n          <button (click)=\"analyize()\" type=\"button\" class=\" text-center btn btn-outline-primary\">Analyze</button>\n        </div>\n\n        <div class=\"col-sm-8\">\n          <app-letter-frequency [letterFrequencyDict]=\"normalizedLetterFrequencyDict\"></app-letter-frequency>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card content\" *ngIf=\"lettersData.length > 0\">\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-sm-4\">\n          <h3 class=\"text-center\"> Most Frequent letters</h3>\n          <table class=\"table table-bordered\">\n            <thead>\n            <tr>\n              <th>letter</th>\n              <th>frequency</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let letter of lettersData\">\n              <td>{{ letter.letter }}</td>\n              <td>{{letter.count}}</td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n\n        <div class=\"col-sm-8\">\n          <h3 class=\"text-center\"> Shifts</h3>\n          <ul class=\"list-group\">\n            <li class=\"list-group-item\" *ngFor=\"let deviation of deviations\">\n              {{ deviation.shift }} : {{deviation.text}}\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shift-cypher/shift-cypher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShiftCypherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_service__ = __webpack_require__("../../../../../src/app/utils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShiftCypherComponent = /** @class */ (function () {
    function ShiftCypherComponent(utils) {
        this.utils = utils;
        this.text = '';
        this.normalizedLetterFrequencyDict = {};
        this.lettersData = [];
        this.charactersToShow = 50;
        this.preserveWhiteSpace = false;
        this.deviations = [];
    }
    ShiftCypherComponent.prototype.analyize = function () {
        var copyText = this.text;
        if (!this.preserveWhiteSpace) {
            copyText = copyText.replace(/ /g, '');
        }
        var letterFrequencyDict = this.utils.generateLetterCountDictionary(copyText);
        var sum = this.utils.countDict(letterFrequencyDict);
        var alphabet = this.utils.alphabet;
        this.lettersData = [];
        this.normalizedLetterFrequencyDict = {};
        for (var i = 0; i < alphabet.length; i++) {
            this.normalizedLetterFrequencyDict[alphabet[i]] = letterFrequencyDict[alphabet[i]] / sum;
            this.lettersData.push({ letter: alphabet[i], frequency: letterFrequencyDict[alphabet[i]] / sum, count: letterFrequencyDict[alphabet[i]] });
        }
        this.lettersData.sort(function (a, b) {
            return a.count > b.count ? -1 : 1;
        });
        this.generateDeviations(copyText);
    };
    ShiftCypherComponent.prototype.nextCharacterWrapAround = function (s) {
        return s.replace(/([a-zA-Z])[^a-zA-Z]*$/, function (a) {
            var c = a.charCodeAt(0);
            switch (c) {
                case 90: return 'A';
                case 122: return 'a';
                default: return String.fromCharCode(++c);
            }
        });
    };
    ShiftCypherComponent.prototype.generateDeviations = function (text) {
        this.deviations = [];
        for (var i = 0; i < 25; i++) {
            var iteration = '';
            for (var j = 0; j < this.charactersToShow; j++) {
                iteration += this.nextCharacterWrapAround(text.charAt(j));
            }
            this.deviations.push({ shift: i + 1, text: iteration });
            text = iteration;
        }
    };
    ShiftCypherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shift-cypher',
            template: __webpack_require__("../../../../../src/app/shift-cypher/shift-cypher.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shift-cypher/shift-cypher.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__utils_service__["a" /* UtilsService */]])
    ], ShiftCypherComponent);
    return ShiftCypherComponent;
}());



/***/ }),

/***/ "../../../../../src/app/text-analysis/text-analysis.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/text-analysis/text-analysis.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container no-margin-check times\">\r\n  <div class=\"card content\">\r\n    <div class=\"card-body\">\r\n      <div class=\" row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <h2 class=\"text-center\">Text</h2>\r\n            <textarea [(ngModel)]=\"text\" class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"10\"></textarea>\r\n          </div>\r\n          <button (click)=\"analyize()\" type=\"button\" class=\" text-center btn btn-outline-primary\">Analyze</button>\r\n          <button (click)=\"showReplaceKey = !showReplaceKey\" type=\"button\" class=\" text-center btn btn-outline-primary\">{{showReplaceKey ? 'hide' : 'show'}} replaced key</button>\r\n\r\n        </div>\r\n        <div class=\"col-sm-7\">\r\n          <app-letter-frequency [letterFrequencyDict]=\"normalizedLetterFrequencyDict\"></app-letter-frequency>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card content\" *ngIf=\"lettersData.length > 0\">\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-3\">\r\n          <h3 class=\"text-center\"> Most Frequent letters</h3>\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n            <tr>\r\n              <th>letter</th>\r\n              <th>frequency</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let letter of lettersData\">\r\n              <td>{{ letter.letter }}</td>\r\n              <td>{{letter.count}} ( {{letter.frequency}})</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"col-sm-3\">\r\n          <h3 class=\"text-center\">Most Frequent digraphs</h3>\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n            <tr>\r\n              <th>digraph</th>\r\n              <th>relative frequency</th>\r\n              <th>reverse frequency</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let gram of nGraphs[0].entries\">\r\n              <td>{{ gram.name }}</td>\r\n              <td>{{gram.frequency}}</td>\r\n              <td>{{gram.reverseFrequency}}</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"col-sm-3\">\r\n          <h3 class=\"text-center\"> Most Frequent trigraphs</h3>\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n            <tr>\r\n              <th>trigraph</th>\r\n              <th>relative frequency</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let gram of nGraphs[1].entries\">\r\n              <td>{{ gram.name }}</td>\r\n              <td>{{gram.frequency}}</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"col-sm-3\">\r\n          <h3>Replacement</h3>\r\n          <button (click)=\"replace()\" type=\"button\" class=\" text-center btn btn-outline-primary\">replace</button>\r\n\r\n          <table class=\"table table-bordered\">\r\n                <thead>\r\n                <tr>\r\n                  <th>letter</th>\r\n                  <th>replacement</th>\r\n                  <!--<th>highlight</th>-->\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let letter of transformKey\">\r\n                    <td *ngIf=\"normalizedLetterFrequencyDict[letter.letter] > 0\">{{letter.letter}}</td>\r\n                    <td *ngIf=\"normalizedLetterFrequencyDict[letter.letter] > 0\"><input [(ngModel)]=\"letter.replacementLetter\" type=\"text\" minlength=\"1\" maxlength=\"1\" size=\"1\">\r\n                    <span *ngIf=\"letter.letter != letter.replacementLetter\">\r\n                        <i class=\"material-icons\">done</i>\r\n                    </span>\r\n                      <span *ngIf=\"duplicateTransform(letter)\">\r\n                            <i class=\"material-icons\">report_problem</i>\r\n                      </span>\r\n                    </td>\r\n                  <!--<td *ngIf=\"normalizedLetterFrequencyDict[letter.letter] > 0\">-->\r\n                    <!--<input  [(ngModel)]=\"letter.highlight\"  class=\"no-margin-check form-check-input\" type=\"checkbox\" value=\"\">-->\r\n                  <!--</td>-->\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card content\" *ngIf=\"lettersData.length > 0 && nGraphs[0].entries.length > 0\">\r\n    <h3>Letter matrix\r\n      <button  (click)=\"changeTableState()\" type=\"button\" class=\" text-center btn btn-outline-primary\">\r\n        {{ showTable ? 'Hide' : 'Show' }}</button>\r\n    </h3>\r\n    <table class=\"table table-bordered letter-matrix text-center\" *ngIf=\"showTable\">\r\n      <thead>\r\n      <tr>\r\n        <th></th>\r\n        <th *ngFor=\"let letter of lettersData\">{{letter.letter}}</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr></tr>\r\n      <tr *ngFor=\"let letter of lettersData; let i = index\">\r\n        <td>{{letter.letter}}</td>\r\n        <td *ngFor=\"let subLetter of lettersData\" [ngStyle]=\"{'backgroundColor':\r\n        completeDigraphDict[letter.letter + subLetter.letter.toUpperCase()] ?\r\n        'hsl('+ ((completeDigraphDict[letter.letter + subLetter.letter.toUpperCase()] || 0) / completeDigraphDict[nGraphs[0].entries[0].name]) * 120 +', 100%, 50%)'\r\n          : 'white'}\">\r\n          {{completeDigraphDict[letter.letter + subLetter.letter.toUpperCase()] || '0' }}  </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n  <div class=\"card content\" *ngIf=\"replacedText.length > 0\">\r\n    <div class=\"card-body\">\r\n      <div *ngIf=\"showReplaceKey\">\r\n        <h4>Replaced key</h4>\r\n        <table class=\"table table-bordered letter-matrix text-center\">\r\n          <thead>\r\n          <tr>\r\n            <th *ngFor=\"let letter of transformKey\">{{letter.letter}}</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr>\r\n            <td *ngFor=\"let letter of transformKey\">{{ letter.letter != letter.replacementLetter ?  letter.replacementLetter : ' ' }}</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <h3>Replaced Text</h3>\r\n\r\n      <div>\r\n        highlight\r\n        <input [(ngModel)]=\"highlightKeys\" type=\"text\">\r\n        <button (click)=\"highlightText()\" type=\"button\" class=\" text-center btn btn-outline-primary\">highlight</button>\r\n      </div>\r\n\r\n      <div [innerHTML]=\"highLightedText\"></div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--<div class=\"card content\" >-->\r\n    <!--<div class=\"card-body\">-->\r\n      <!--<h3>FAQ : </h3>-->\r\n\r\n      <!--<b>Highlight : </b>-->\r\n      <!--<p>Highlight will take a comma separated string, i.e test,t,w and highlight any of thing that matches.</p>-->\r\n\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/text-analysis/text-analysis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextAnalysisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_service__ = __webpack_require__("../../../../../src/app/utils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TextAnalysisComponent = /** @class */ (function () {
    function TextAnalysisComponent(utils) {
        this.utils = utils;
        /*
        text: the text given by the user - avoid changing it
        replacedText: text generated after replacing characters from the text
        highLightedText: the actual text displayed at the bottom of the screen as html
        highlightKeys: comma separated text from the user used to know what to highlight
         */
        this.text = '';
        this.replacedText = '';
        this.highLightedText = '';
        this.highlightKeys = '';
        /*
         completeDigraphDict: consider removing - would be used for letter matrix
         lettersData: letter frequency string for displaying the letter frequency table
         nGraphs: list of n-graph data, currently only has digraph and trigraph data
         transformKey: list of objects with letter, transformkey letter pairs
         */
        this.normalizedLetterFrequencyDict = {};
        this.completeDigraphDict = {};
        this.lettersData = [];
        this.nGraphs = [];
        this.transformKey = [];
        /*
        showReplaceKey used for knowing current state of hiding the replaceKey
         */
        this.showReplaceKey = true;
        this.showTable = true;
    }
    TextAnalysisComponent.prototype.ngOnInit = function () {
    };
    TextAnalysisComponent.prototype.changeTableState = function () {
        this.showTable = !this.showTable;
    };
    /*
    1. generates a replaceKeyDict which says which particular letters need to be replaced
    2. using this.text, goes through by character and see if it exists in the replaceKeyDict and if so  replaces in new text
    3. generate new n-graphs from the replaced text
    4. hightlight the text
     */
    TextAnalysisComponent.prototype.replace = function () {
        //1
        var replaceKeyDict = {};
        for (var i = 0; i < this.transformKey.length; i++) {
            replaceKeyDict[this.transformKey[i].letter] = this.transformKey[i].replacementLetter;
        }
        //replace text is for what is displayed
        this.replacedText = '';
        //2
        for (var j = 0; j < this.text.length; j++) {
            var char = this.text.charAt(j).toUpperCase();
            //replace char if necessary
            if (replaceKeyDict[char]) {
                char = replaceKeyDict[char];
            }
            this.replacedText += char;
        }
        this.replacedText = this.utils.stripWhiteSpaceAndFormatting(this.replacedText);
        //3
        this.nGraphs = this.generateSortedNgraphsLists(this.replacedText, [2, 3]);
        //4
        this.highlightText();
    };
    TextAnalysisComponent.prototype.highlightText = function () {
        this.highLightedText = this.highlight(this.replacedText);
    };
    /**
     * Highlights search phrases within the given text.
     * @param text - the text to highlight phrases in
     * @returns {string} - text with HTML classes that highlight selected phrases
     */
    TextAnalysisComponent.prototype.highlight = function (text) {
        var keywordsSplit = this.highlightKeys.split(',');
        keywordsSplit.sort(function (a, b) {
            return a.length > b.length ? -1 : 1;
        });
        //First change the keywords to now be a string with words separated with | per reg exp
        var keywords = keywordsSplit.join('|');
        //For every match found replace with a highlighted version
        return text.replace(new RegExp(keywords, "g"), function myFunction(x) {
            return "<span class='highlight-text'>" + x + "</span>";
        });
    };
    TextAnalysisComponent.prototype.duplicateTransform = function (letterTransform) {
        for (var i = 0; i < this.transformKey.length; i++) {
            if (this.transformKey[i].replacementLetter == letterTransform.replacementLetter && this.transformKey[i].letter != letterTransform.letter) {
                return true;
            }
        }
        return false;
    };
    /**
     * generates nGraphs of the sizes passed in into a list of ngraphs with sorted lists of entries
     *
     * @param text
     * @param ngraphSizes
     * @returns {Array}
     */
    TextAnalysisComponent.prototype.generateSortedNgraphsLists = function (text, ngraphSizes) {
        var nGraphLists = this.utils.generateNGramDictionary(text, ngraphSizes);
        var sortedNGraphs = [];
        //assuming the first one is a size 2
        this.completeDigraphDict = nGraphLists[0].grams;
        //iterate through ngraphs given back
        for (var i = 0; i < nGraphLists.length; i++) {
            //generate ngraph object
            var g = { name: nGraphLists[i].size, entries: [] };
            //create and sort list of all of the ngraph dict
            for (var key in nGraphLists[i].grams) {
                g.entries.push({ name: key, frequency: (nGraphLists[i].grams[key] / nGraphLists[i].grams[nGraphLists[i].mostFrequent]).toPrecision(3) });
            }
            g.entries.sort(function (a, b) {
                return a.frequency > b.frequency ? -1 : 1;
            });
            //take top 25 entries
            g.entries = g.entries.splice(0, 25);
            //grab the reverse values
            for (var j = 0; j < g.entries.length; j++) {
                var reverseKey = g.entries[j].name.split("").reverse().join(""); //man I hate this
                var reverse = nGraphLists[i].grams[reverseKey] ? nGraphLists[i].grams[reverseKey] : 0;
                g.entries[j].reverseKey = reverseKey;
                g.entries[j].reverseFrequency = (reverse / nGraphLists[i].grams[nGraphLists[i].mostFrequent]).toPrecision(3);
            }
            sortedNGraphs.push(g);
        }
        return sortedNGraphs;
    };
    /**
     *
     */
    TextAnalysisComponent.prototype.analyize = function () {
        var copyText = this.text;
        //remove white space
        copyText = this.utils.stripWhiteSpaceAndFormatting(copyText);
        copyText = copyText.toUpperCase();
        //set replace text which is used as a base for highlight
        this.replacedText = copyText;
        //set hightlight for output text
        this.highlightText();
        var letterFrequencyDict = this.utils.generateLetterCountDictionary(copyText);
        var sum = this.utils.countDict(letterFrequencyDict);
        var alphabet = this.utils.alphabet;
        this.normalizedLetterFrequencyDict = {};
        //generate letters data and normalized letter frequency dict and transformKeyList
        this.transformKey = [];
        this.lettersData = [];
        for (var i = 0; i < alphabet.length; i++) {
            this.normalizedLetterFrequencyDict[alphabet[i]] = letterFrequencyDict[alphabet[i]] / sum;
            this.lettersData.push({ letter: alphabet[i], frequency: (letterFrequencyDict[alphabet[i]] / sum).toPrecision(3), count: letterFrequencyDict[alphabet[i]] });
            if (letterFrequencyDict[alphabet[i]] > 0) {
                this.transformKey.push({ letter: alphabet[i], replacementLetter: alphabet[i] });
            }
        }
        this.lettersData.sort(function (a, b) {
            return a.count > b.count ? -1 : 1;
        });
        this.nGraphs = this.generateSortedNgraphsLists(copyText, [2, 3]);
    };
    TextAnalysisComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-text-analysis',
            template: __webpack_require__("../../../../../src/app/text-analysis/text-analysis.component.html"),
            styles: [__webpack_require__("../../../../../src/app/text-analysis/text-analysis.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__utils_service__["a" /* UtilsService */]])
    ], TextAnalysisComponent);
    return TextAnalysisComponent;
}());



/***/ }),

/***/ "../../../../../src/app/transposition/transposition.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/transposition/transposition.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container no-margin-check times\">\r\n  <div class=\"card content\">\r\n    <div class=\"card-body\">\r\n      <div class=\" row\">\r\n        <div class=\"col-sm-3\">\r\n          <div class=\"form-group\">\r\n            <h2 class=\"text-center\">Text</h2>\r\n            <textarea [(ngModel)]=\"text\" class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"10\"></textarea>\r\n            <button (click)=\"analyze()\" type=\"button\" class=\" text-center btn btn-outline-primary\">Analyze</button>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-9\">\r\n          <h5>Possible table sizes : </h5>\r\n          <div class=\"row\" style=\"padding-bottom: 15px;\">\r\n            <div class=\"col-xs-1\" *ngFor=\"let factor of allFactors\">\r\n              <button (click)=\"changeGridSize(factor)\" type=\"button\" class=\" text-center btn btn-outline-primary\">{{factor}}</button>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"matrix.length > 0\">\r\n            <h5>table controls : </h5>\r\n            <div class=\"row\">\r\n              <button (click)=\"shift(1)\" type=\"button\" class=\"col-xs-1 text-center btn btn-outline-primary\">{{'<'}}</button>\r\n              <button (click)=\"shift(-1)\" type=\"button\" class=\"col-xs-1 text-center btn btn-outline-primary\">{{'>'}}</button>\r\n\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12\" style=\"width: 100%;\">\r\n                <div class=\"replaced-text\" style=\"max-height: 250px; !important; resize: both;\">\r\n                  <table class=\"table table-bordered\" style=\"table-layout: fixed\">\r\n                    <thead>\r\n                    <tr>\r\n                      <th class=\"text-center\" *ngFor=\"let column of columnIndexs; let i = index\">\r\n                        <button style=\"width: 100%; padding: 0px;\"\r\n                          [ngStyle]=\"{'background-color':swap ===  i ? 'gray' : '', 'border-color': lockStates[i] ? 'red' : ''}\"\r\n                                (click)=\"selectToShift(i)\" type=\"button\" class=\" text-center btn btn-outline-primary\">{{column}}</button>\r\n                      </th>\r\n                      <th style=\"width: 110px;\">\r\n                        vowel counts\r\n                      </th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let row of matrix;let i = index\" class=\"text-center\">\r\n                      <td *ngFor=\"let index of row\">\r\n                        {{ index}}\r\n                      </td>\r\n                      <td>\r\n                        {{vowels[i].count}}({{vowels[i].percentage}}%)\r\n                      </td>\r\n                    </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card content\" *ngIf=\"matrix.length > 0\">\r\n    <div class=\"card-body row\">\r\n          <div class=\"col-sm-6\">\r\n            <h3>Replaced Text</h3>\r\n            <div [innerHTML]=\"highLightedText\"></div>\r\n          </div>\r\n          <div class=\"col-sm-6\">\r\n            <div class=\"col-xs-6\">\r\n              average vowels per line : {{averageVowels}}\r\n            </div>\r\n            <div class=\"col-xs-6\">\r\n              line vowel std dev : {{vowelStandardDeviation}}\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <h4 class=\"text-center\">Top digraphs counts</h4>\r\n                <table class=\"table table-bordered\">\r\n                  <thead>\r\n                  <tr>\r\n                    <th>digraph</th>\r\n                    <th>count</th>\r\n                  </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                  <tr *ngFor=\"let gram of digraphs\">\r\n                    <td>{{ gram.name }}</td>\r\n                    <td>{{gram.count}}</td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <h4 class=\"text-center\">Top trigraphs counts</h4>\r\n                <table class=\"table table-bordered\">\r\n                  <thead>\r\n                  <tr>\r\n                    <th>digraph</th>\r\n                    <th>count</th>\r\n                  </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                  <tr *ngFor=\"let gram of trigraphs\">\r\n                    <td>{{ gram.name }}</td>\r\n                    <td>{{gram.count}}</td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/transposition/transposition.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranspositionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_service__ = __webpack_require__("../../../../../src/app/utils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TranspositionComponent = /** @class */ (function () {
    function TranspositionComponent(utils) {
        this.utils = utils;
        this.text = '';
        this.highLightedText = '';
        this.allFactors = [];
        this.matrix = [];
        this.vowels = [];
        this.vowelStandardDeviation = '';
        this.averageVowels = '';
        this.columnIndexs = [];
        this.swap = -1;
        this.digraphs = [];
        this.trigraphs = [];
        this.canLock = false;
        this.lockStates = [];
    }
    TranspositionComponent.prototype.ngOnInit = function () {
    };
    TranspositionComponent.prototype.analyze = function () {
        this.text = this.text.toUpperCase();
        this.highLightedText = this.utils.stripWhiteSpaceAndFormatting(this.text).toUpperCase();
        this.allFactors = this.utils.factors(this.highLightedText.length);
        this.matrix = [];
    };
    TranspositionComponent.prototype.changeGridSize = function (size) {
        this.text = this.text.toUpperCase();
        this.text = this.utils.stripWhiteSpaceAndFormatting(this.text);
        this.matrix = this.splitTextToRows(this.text, size);
        var vowelData = this.generateVowelCounts(this.matrix);
        this.vowelStandardDeviation = vowelData.stdDev;
        this.vowels = vowelData.improvedVowelCountData;
        this.generateNewText();
        this.columnIndexs = [];
        for (var i = 1; i <= size; i++) {
            this.columnIndexs.push(i);
        }
    };
    TranspositionComponent.prototype.splitTextToColumns = function (text, size) {
        var length = text.length;
        var columns = [];
        for (var i = 0; i < size; i++) {
            columns.push(text.substring((i / size) * length, ((i + 1) / size) * length));
        }
        return columns;
    };
    TranspositionComponent.prototype.splitTextToRows = function (text, size) {
        var length = text.length / size;
        var rows = [];
        for (var i = 0; i < length; i++) {
            rows.push([]);
        }
        for (var i = 0; i < text.length; i++) {
            rows[i % length].push(text.charAt(i));
        }
        return rows;
    };
    TranspositionComponent.prototype.countVowels = function (listOfLetters) {
        var vowels = ['A', 'E', 'I', 'O', 'U'];
        var vowelCount = 0;
        for (var i = 0; i < listOfLetters.length; i++) {
            if (vowels.includes(listOfLetters[i])) {
                vowelCount++;
            }
        }
        return vowelCount;
    };
    TranspositionComponent.prototype.generateVowelCounts = function (grid) {
        var vowelCounts = [];
        var total = 0;
        for (var i = 0; i < grid.length; i++) {
            var c = this.countVowels(grid[i]);
            vowelCounts.push(c);
            total += c;
        }
        this.averageVowels = (total / vowelCounts.length).toPrecision(3);
        var improvedVowelCountData = [];
        for (var i = 0; i < vowelCounts.length; i++) {
            improvedVowelCountData.push({
                'count': vowelCounts[i], 'percentage': ((vowelCounts[i] / grid[i].length) * 100).toPrecision(3)
            });
        }
        var stdDev = this.standardDeviation(vowelCounts).toPrecision(4);
        return { 'improvedVowelCountData': improvedVowelCountData, 'stdDev': stdDev };
    };
    TranspositionComponent.prototype.standardDeviation = function (values) {
        var avg = this.average(values);
        var squareDiffs = values.map(function (value) {
            var diff = value - avg;
            var sqrDiff = diff * diff;
            return sqrDiff;
        });
        var avgSquareDiff = this.average(squareDiffs);
        var stdDev = Math.sqrt(avgSquareDiff);
        return stdDev;
    };
    TranspositionComponent.prototype.average = function (data) {
        var sum = data.reduce(function (sum, value) {
            return sum + value;
        }, 0);
        var avg = sum / data.length;
        return avg;
    };
    TranspositionComponent.prototype.swapColumn = function (array, index1, index2) {
        var hold = array[index1];
        array[index1] = array[index2];
        array[index2] = hold;
    };
    TranspositionComponent.prototype.arrayRotate = function (arr, count) {
        count -= arr.length * Math.floor(count / arr.length);
        arr.push.apply(arr, arr.splice(0, count));
        return arr;
    };
    TranspositionComponent.prototype.shift = function (shiftAmount) {
        var movableColumns = [];
        this.arrayRotate(this.columnIndexs, shiftAmount);
        for (var i = 0; i < this.matrix.length; i++) {
            this.arrayRotate(this.matrix[i], shiftAmount);
        }
        this.generateNewText();
    };
    TranspositionComponent.prototype.selectToShift = function (index) {
        if (this.swap > -1) {
            for (var i = 0; i < this.matrix.length; i++) {
                this.swapColumn(this.matrix[i], this.swap, index);
            }
            this.swapColumn(this.columnIndexs, this.swap, index);
            this.swapColumn(this.lockStates, this.swap, index);
            this.generateNewText();
            this.swap = -1;
        }
        else {
            this.swap = index;
        }
    };
    TranspositionComponent.prototype.generateNewText = function () {
        var newText = '';
        for (var i = 0; i < this.matrix.length; i++) {
            newText += this.matrix[i].join('');
        }
        this.highLightedText = newText;
        var ngrams = this.utils.generateNGramDictionary(this.highLightedText, [2, 3]);
        this.digraphs = this.utils.sortNgramDictToList(ngrams[0].grams).slice(0, 15);
        this.trigraphs = this.utils.sortNgramDictToList(ngrams[1].grams).slice(0, 15);
    };
    TranspositionComponent.prototype.getLockState = function () {
        return this.lockStates[this.swap];
    };
    TranspositionComponent.prototype.ChangeColumnLockState = function () {
        this.lockStates[this.swap] = !this.lockStates[this.swap];
        this.swap = -1;
    };
    TranspositionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-transposition',
            template: __webpack_require__("../../../../../src/app/transposition/transposition.component.html"),
            styles: [__webpack_require__("../../../../../src/app/transposition/transposition.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__utils_service__["a" /* UtilsService */]])
    ], TranspositionComponent);
    return TranspositionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/utils.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UtilsService = /** @class */ (function () {
    function UtilsService() {
        this.alphabet = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'.toUpperCase().split(',');
        this.standard_letter_frequency = "A,.08167\nB,.01492\nC,.02782\nD,.04253\nE,.12702\nF,.02288\nG,.02015\nH,.06094\nI,.06966\nJ,.00153\nK,.00772\nL,.04025\nM,.02406\nN,.06749\nO,.07507\nP,.01929\nQ,.00095\nR,.05987\nS,.06327\nT,.09056\nU,.02758\nV,.00978\nW,.02360\nX,.00150\nY,.01974\nZ,.00074";
        this.standardLetterFrequencyDict = this.generateStandardLetterFrequencyDict(this.standard_letter_frequency);
    }
    /**
     * generates a dictionary of letter, frequency pairs which sum to 1,
     * where the format is character,frequency \n
     * @param standardLetterFrequency
     * @returns {{}}
     */
    UtilsService.prototype.generateStandardLetterFrequencyDict = function (standardLetterFrequency) {
        var list = standardLetterFrequency.split('\n');
        var dict = {};
        for (var i = 0; i < list.length; i++) {
            var splitString = list[i].split(',');
            dict[splitString[0]] = parseFloat(splitString[1]);
        }
        return dict;
    };
    ;
    /**
     * generate a dictionary where each key is a character from the alphabet with a default value of 0.
     * @param alphabet
     * @returns {{}}
     */
    UtilsService.prototype.generateLetterDictionary = function (alphabet) {
        var emptyLetterDict = {};
        for (var i = 0; i < alphabet.length; i++) {
            emptyLetterDict[alphabet[i]] = 0;
        }
        return emptyLetterDict;
    };
    ;
    /**
     * generates a dictionary of letter frequency counts from a text from an approved
     * list of characters with the default being english alphabet
     * @param text
     * @param alphabet
     * @returns {{}}
     */
    UtilsService.prototype.generateLetterCountDictionary = function (text, alphabet) {
        if (alphabet === void 0) { alphabet = this.alphabet; }
        var lettersCountDict = this.generateLetterDictionary(alphabet);
        for (var i = 0; i < text.length; i++) {
            var char = text.charAt(i).toUpperCase();
            if (char in lettersCountDict) {
                lettersCountDict[char] += 1;
            }
        }
        return lettersCountDict;
    };
    ;
    /**
     * Generates a sum from a dictionary of just key : number
     * @param dict
     * @returns {number}
     */
    UtilsService.prototype.countDict = function (dict) {
        var count = 0;
        for (var key in dict) {
            count += dict[key];
        }
        return count;
    };
    /**
     * Generates an ordered(decreasing frequency) letter frequency list, which sums to 1 of given text of the
     * characters in the alphabet with the default being the standard english alphabet.
     * @param text
     * @param alphabet
     * @returns {Array}
     */
    UtilsService.prototype.generateOrderedLetterFrequencyList = function (text, alphabet) {
        if (alphabet === void 0) { alphabet = this.alphabet; }
        var lettersCountDict = this.generateLetterCountDictionary(text, alphabet);
        var orderedList = [];
        var count = this.countDict(lettersCountDict);
        for (var key in lettersCountDict) {
            orderedList.push({
                letter: key,
                count: lettersCountDict[key],
                frequency: (lettersCountDict[key] / count).toPrecision(5)
            });
        }
        return orderedList;
    };
    ;
    UtilsService.prototype.generateNGramDictionary = function (text, nSizes) {
        var nGrams = [];
        for (var i = 0; i < nSizes.length; i++) {
            nGrams.push({ size: nSizes[i], grams: {}, mostFrequent: null });
        }
        var textLength = text.length;
        for (i = 0; i < textLength; i++) {
            for (var j = 0; j < nGrams.length; j++) {
                if (textLength - i - nGrams[j].size >= 0) {
                    var g = text.substring(i, i + nGrams[j].size);
                    if (nGrams[j].grams[g]) {
                        nGrams[j].grams[g] += 1;
                    }
                    else {
                        nGrams[j].grams[g] = 1;
                    }
                    //if set check, otherwise initialize
                    if (nGrams[j].mostFrequent) {
                        if (nGrams[j].grams[g] > nGrams[j].grams[nGrams[j].mostFrequent]) {
                            nGrams[j].mostFrequent = g;
                        }
                    }
                    else {
                        nGrams[j].mostFrequent = g;
                    }
                }
            }
        }
        return nGrams;
    };
    UtilsService.prototype.sortNgramDictToList = function (ngramDict) {
        var ngrams = [];
        for (var key in ngramDict) {
            ngrams.push({ name: key, count: ngramDict[key] });
        }
        ngrams.sort(function (a, b) {
            return a.count > b.count ? -1 : 1;
        });
        return ngrams;
    };
    /**
     * stripes whitespace and new line characters
     * @param text
     * @returns {string}
     */
    UtilsService.prototype.stripWhiteSpaceAndFormatting = function (text) {
        return text.replace(/\W+/g, "").trim();
    };
    UtilsService.prototype.factors = function (num) {
        var allFactors = [];
        for (var i = 0; i <= num; i++) {
            if (num % i === 0) {
                allFactors.push(i);
            }
        }
        return allFactors;
    };
    UtilsService.prototype.isLetter = function (c) {
        return c.toLowerCase() != c.toUpperCase();
    };
    UtilsService.prototype.uniqueString = function (str) {
        var result = '';
        for (var i = 0; i < str.length; i++) {
            if (result.indexOf(str[i]) < 0) {
                result += str[i];
            }
        }
        return result;
    };
    UtilsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UtilsService);
    return UtilsService;
}());



/***/ }),

/***/ "../../../../../src/app/vigenere/vigenere.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vigenere/vigenere.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container no-margin-check times\">\r\n  <div class=\"card content\">\r\n    <div class=\"card-body\">\r\n      <div class=\" row\">\r\n        <div class=\"col-sm-3\">\r\n          <div class=\"form-group\">\r\n            <h2 class=\"text-center\">Text</h2>\r\n            <textarea [(ngModel)]=\"text\" class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"10\"></textarea>\r\n          </div>\r\n\r\n          <button (click)=\"showKey =  !showKey\" type=\"button\" class=\" text-center btn btn-outline-primary\">{{showKey ? 'format' : 'key' }}</button>\r\n\r\n          <div class=\"row text-center\" *ngIf=\"showKey\">\r\n            <div class=\"col-xs-6\">\r\n              <label class=\"inline-label text-center\">min factor </label>\r\n            </div>\r\n            <div class=\"col-xs-6\">\r\n              <input [(ngModel)]=\"minFactor\" type=\"number\"  class=\"form-control\">\r\n            </div>\r\n\r\n            <div class=\"col-xs-6\">\r\n              <label class=\"inline-label text-center\">max factor </label>\r\n            </div>\r\n            <div class=\"col-xs-6\">\r\n              <input [(ngModel)]=\"maxFactor\" type=\"number\"  class=\"form-control\">\r\n            </div>\r\n\r\n              <button (click)=\"analyize()\" type=\"button\" class=\" text-center btn btn-outline-primary\">Analyze</button>\r\n          </div>\r\n\r\n          <div  *ngIf=\"!showKey\">\r\n            <div>\r\n              <label>key size blocks</label>\r\n              <input [(ngModel)]=\"keySizeBlocks\" type=\"checkbox\"  class=\"form-control\">\r\n            </div>\r\n            <div >\r\n              <label>highlight</label>\r\n              <input [(ngModel)]=\"highlighting\" type=\"checkbox\"  class=\"form-control\">\r\n            </div>\r\n            <div>\r\n              <button (click)=\"reformat()\" type=\"button\" class=\" text-center btn btn-outline-primary\">reformat</button>\r\n\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-sm-9\">\r\n          <h3>Replaced Text</h3>\r\n          <div [innerHTML]=\"highLightedText\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card content\" *ngIf=\"frequencies.length > 0\">\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div *ngFor=\"let frequency of frequencies; let i = index\" class=\"col-sm-4\">\r\n        <span>\r\n            <label>index : {{i + 1}}</label>\r\n            <button (click)=\"shiftFrequnecy(i,1)\" type=\"button\" class=\" text-center btn btn-outline-primary\">{{'<'}}</button>\r\n            shift : {{ shiftIndexes[i].currentChar}}\r\n            <button (click)=\"shiftFrequnecy(i,-1)\" type=\"button\" class=\" text-center btn btn-outline-primary\">{{'>'}}</button>\r\n\r\n          </span>\r\n          <app-letter-frequency [letterFrequencyList]=\"frequency\">\r\n          </app-letter-frequency>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card content\" *ngIf=\"sequences.length > 0\">\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <table class=\"table table-bordered\">\r\n          <thead>\r\n          <tr>\r\n            <th>sequence</th>\r\n            <th>spacings </th>\r\n            <th *ngFor=\"let factor of factors; let i = index\">\r\n              <button (click)=\"setKeySize(factor.size)\" type=\"button\" class=\" text-center btn btn-outline-primary\">{{factor.size}}</button>\r\n              </th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr>\r\n            <td>count</td>\r\n            <td>  </td>\r\n            <td *ngFor=\"let factor of factors; let i = index\">{{factor.count}}</td>\r\n          </tr>\r\n          <tr *ngFor=\"let sequence of sequences[0].grams\">\r\n            <td>{{sequence.sequence}}</td>\r\n            <td class=\"overflowtext\">({{sequence.spacings.length}}) {{sequence.spacings.toString()}}</td>\r\n            <td *ngFor=\"let factor of factors\" >{{ sequence.factors[factor.size] ? 'x' : ' '}} </td>\r\n\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card content\">\r\n    <div class=\"card-body\">\r\n      Guide:\r\n      <br>\r\n      First enter your text into the text box.\r\n      <br>\r\n      Here you can change the key size to generate how the text should be analyzed for letter frequency. When you hit\r\n      the keys to shift the base of the alphabet it will show a highlight of that index in the text.\r\n      <br>\r\n      Min/max factors let you change the min/max sizes for the table of possible key sizes the table generates. Most likely you dont need to change these.\r\n      <br>\r\n      Hit format if you want to change the option for highlighting/block key size then reformat.\r\n      <br>\r\n      Hit analyze when you want it to parse the text into the multiple word frequencies, hit analyze whenever you change the key size.\r\n      <br>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/vigenere/vigenere.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VigenereComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_service__ = __webpack_require__("../../../../../src/app/utils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VigenereComponent = /** @class */ (function () {
    function VigenereComponent(utils) {
        this.utils = utils;
        /*
         text: the text given by the user - avoid changing it
         replacedText: text generated after replacing characters from the text
         highLightedText: the actual text displayed to the right of the screen as html
         keyLength: currently selected keylength guess
         factors: list of numbers which is from minFactor(inclusive) to maxFactor(inclusive)
         frequencies: list of lists(since only strings of length are checked for spacing its effectively just a reference in the way currently) containing frequencies of letters for each index of the key
         shiftIndexes: keeps track of how shifted each index is and what letter that gives for the key
         sequences: all of the sequences found in the string
         currentlyHighLightedIndex: keeps track of which index of the key is currently meant to be highlighted
         */
        this.text = '';
        this.replacedText = '';
        this.highLightedText = '';
        this.keyLength = 3;
        this.factors = [];
        this.maxFactor = 20;
        this.minFactor = 2;
        this.frequencies = [];
        this.shiftIndexes = [];
        this.sequences = [];
        this.currentlyHighlightedIndex = 0;
        /*
        showKey : knows if formmatting or key should be shown
         keySizeBlocks
         highlighting
         */
        this.showKey = true;
        this.keySizeBlocks = true;
        this.highlighting = true;
    }
    VigenereComponent.prototype.ngOnInit = function () {
    };
    VigenereComponent.prototype.analyize = function () {
        this.replacedText = this.utils.stripWhiteSpaceAndFormatting(this.text);
        this.highLightedText = this.replacedText;
        this.sequences = this.generateRepeatedSequenceDistances(this.replacedText, [3]);
        //this.frequencies = this.generateNthFrequencies(this.replacedText);
        this.groupText();
    };
    VigenereComponent.prototype.setKeySize = function (size) {
        this.keyLength = size;
        this.frequencies = this.generateNthFrequencies(this.replacedText);
        this.highLightedText = this.replacedText;
        this.groupText();
    };
    VigenereComponent.prototype.reformat = function () {
        this.groupText();
    };
    VigenereComponent.prototype.groupText = function () {
        var padding = 0;
        var text = this.replacedText;
        if (this.keySizeBlocks) {
            text = text.match(new RegExp('.{1,' + this.keyLength + '}', 'g')).join(' ');
            padding = 1;
        }
        if (this.highlighting) {
            var newText = '';
            for (var i = 0; i < text.length; i++) {
                if (i % (this.keyLength + padding) != this.currentlyHighlightedIndex) {
                    newText += text.charAt(i);
                }
                else {
                    newText += "<span class='highlight-text'>" + text.charAt(i) + "</span>";
                }
            }
            text = newText;
        }
        this.highLightedText = "<div class='replaced-text'>" + text + "</div>";
    };
    /**
     * takes in a character, letter and a number, shift and will shift the character by that much in either direction
     * NOTE: returns as an uppercase character
     * @param letter
     * @param shift
     * @returns {string}
     */
    VigenereComponent.prototype.shiftLetter = function (letter, shift) {
        letter = letter.toUpperCase();
        var letterCode = letter.charCodeAt(0);
        letterCode += shift;
        letterCode -= 65;
        if (letterCode < 0) {
            letterCode = 26 + letterCode;
        }
        letterCode = letterCode % 26;
        letterCode += 65;
        return String.fromCharCode(letterCode);
    };
    /**
     * takes in an amount to shift by and what offset from 0. I.E if shifting every 3rd character starting at the 2nd char
     * in the string. this manipulates replacedText and then calls groupText to update highlightedText to display the changes
     * @param shift
     * @param offset
     */
    VigenereComponent.prototype.shiftText = function (shift, offset) {
        //turn into a list because its easier to iterate over and change every nth element
        var splitS = this.replacedText.split('');
        for (var i = offset; i < splitS.length - 1; i += this.keyLength) {
            splitS[i] = this.shiftLetter(splitS[i], shift);
        }
        //turn back into a string
        this.replacedText = splitS.join("");
        this.groupText();
    };
    /**
     * meant to be called in the html and correspond with the < > arrow keys for rotating that frequency list by count
     * @param index
     * @param count
     */
    VigenereComponent.prototype.shiftFrequnecy = function (index, count) {
        //change highlightedIndex
        this.currentlyHighlightedIndex = index;
        //call shift text to update the characters of this index
        this.shiftText(-1 * count, index);
        //keep track of this info
        this.shiftIndexes[index].shift += count;
        this.shiftIndexes[index].currentChar = this.shiftLetter(this.shiftIndexes[index].currentChar, count);
        //now here we need to make a new array of the rotated frequency list by count and reassign to this.frequencies
        //because it is an input for the letter-frequency component and the only way for it to know a change happened is when a memory location of a property changes of the object
        var arr = [].concat(this.frequencies[index]);
        count -= arr.length * Math.floor(count / arr.length);
        arr.push.apply(arr, arr.splice(0, count));
        this.frequencies[index] = arr;
    };
    /**
     * This is responsible for taking the text and parsing it into multiple strings for each index of the key and then
     * generating the letter frequency for each string and then flattening that into a ordered letter frequency array.
     * It also initializes the shiftIndexes, which keep track of how much you have rotated the arrays
     *
     * ALSO if not commented out will initialize the positions of the shift indexes in an attempt to help you solve it
     * @param text
     * @returns {Array}
     */
    VigenereComponent.prototype.generateNthFrequencies = function (text) {
        //initialize book keeping
        this.shiftIndexes = [];
        var frequencies = [];
        var modStrings = [];
        for (var x = 0; x < this.keyLength; x++) {
            modStrings.push('');
            this.shiftIndexes.push({ currentChar: 'A', shift: 0 });
        }
        //split the text into multiple strings for each index of the key
        var alphabet = this.utils.alphabet;
        for (var i = 0; i < text.length; i++) {
            var mod = i % this.keyLength;
            modStrings[mod] += text.charAt(i);
        }
        //now generate frequences for each index into a list
        for (var x = 0; x < modStrings.length; x++) {
            var normalizedFrequencies = [];
            var letterFrequencyDict = this.utils.generateLetterCountDictionary(modStrings[x]);
            var sum = this.utils.countDict(letterFrequencyDict);
            //generate letters data and normalized letter frequency dict and transformKeyList
            for (var i = 0; i < alphabet.length; i++) {
                normalizedFrequencies.push(letterFrequencyDict[alphabet[i]] / sum);
            }
            frequencies.push(normalizedFrequencies);
        }
        //comment out if you dont want it to attempt to auto solve it for you.
        //get a list of standard letter frequency
        // var standardLetterFrequencyDict = this.utils.standardLetterFrequencyDict;
        // var alphabet = this.utils.alphabet;
        // var standardLetterFrequencyData = [];
        // for(var i = 0; i < alphabet.length; i++){
        //   standardLetterFrequencyData.push(standardLetterFrequencyDict[alphabet[i]]);
        // }
        // //go through and let auto fit make its best guess and then shift that index of the key to its guess
        // for(var i = 0; i < frequencies.length; i++){
        //   var shift = this.autoFit(frequencies[i],standardLetterFrequencyData);
        //   this.shiftFrequnecy(i, shift )
        // }
        //end auto solve
        return frequencies;
    };
    /**
     * Generates an array of objects {sequence: string, spacings: [number], factors: {number} }
     * sizes is a list of numbers for what sizes of the sequences to look for, currently just size 3 is used
     * spacings is the distance between every occurence so POW(number of spacings) for a formula for how many to expect
     * factors is a dictionary of key pairs which are just meant for quick look up on if the sequence spacings has that as a factor
     * @param text
     * @param sizes
     * @returns {Array}
     */
    VigenereComponent.prototype.generateRepeatedSequenceDistances = function (text, sizes) {
        //make the base objects for the sequences
        var sequenceLengths = [];
        for (var i = 0; i < sizes.length; i++) {
            sequenceLengths.push({ size: sizes[i], grams: {} });
        }
        var textLength = text.length;
        //iterate through the text length and then iterate over each sequence length
        for (i = 0; i < textLength; i++) {
            for (var j = 0; j < sequenceLengths.length; j++) {
                //basically while its not at the end of the string add it
                if (textLength - i - sequenceLengths[j].size >= 0) {
                    var g = text.substring(i, i + sequenceLengths[j].size);
                    //maintain a list of the locations at which it is seen
                    if (sequenceLengths[j].grams[g]) {
                        sequenceLengths[j].grams[g].push(i);
                    }
                    else {
                        sequenceLengths[j].grams[g] = [i];
                    }
                }
            }
        }
        //here is where the factors list is created
        this.factors = [];
        for (var c = this.minFactor; c <= this.maxFactor; c++) {
            this.factors.push({ size: c, count: 0 });
        }
        //iterate over each sequence size
        for (var i = 0; i < sequenceLengths.length; i++) {
            var validRepeatedSequences = [];
            //for each sequence if it occurs more then once then generate POW set of differences
            for (var key in sequenceLengths[i].grams) {
                var ref = sequenceLengths[i].grams[key];
                if (ref.length > 1) {
                    var spacing = [];
                    //calculate power set of differences
                    for (var x = 0; x < ref.length; x++) {
                        for (var y = x; y < ref.length - 1; y++)
                            spacing.push(ref[y + 1] - ref[x]);
                    }
                    //check if any spacings that was just generated has a number which is divisble by each factor
                    var factors = {};
                    for (var x = this.minFactor; x <= this.maxFactor; x++) {
                        var valid = false;
                        for (var y = 0; y < spacing.length; y++) {
                            if (spacing[y] % x == 0) {
                                valid = true;
                                break;
                            }
                        }
                        if (valid) {
                            factors[x] = true;
                            this.factors[x - this.minFactor].count += 1;
                        }
                    }
                    validRepeatedSequences.push({ sequence: key, spacings: spacing, factors: factors });
                }
            }
            //sort the sequences so that the table displays them by how spacings it has first
            validRepeatedSequences.sort(function (a, b) {
                return a.spacings.length > b.spacings.length ? -1 : 1;
            });
            sequenceLengths[i].grams = validRepeatedSequences;
        }
        return sequenceLengths;
    };
    /**
     * helper function for rotating arrays
     * @param arr
     * @param count
     * @returns {any}
     */
    VigenereComponent.prototype.arrayRotate = function (arr, count) {
        count -= arr.length * Math.floor(count / arr.length);
        arr.push.apply(arr, arr.splice(0, count));
        return arr;
    };
    /**
     * neat function which actually does the guessing and is very simple.
     * take in a frequency list and a reference frequency list(should be standard frequency)
     * @param frequency
     * @param reference
     * @returns {number}
     */
    VigenereComponent.prototype.autoFit = function (frequency, reference) {
        //initialize bookkeeping to some large value so it will get properly set
        var lowestIndex = 0;
        var indexValue = 1000;
        //make new reference
        var arr = [].concat(frequency);
        /*
        Now the logic is as follows:
        1. Compare each column and take absolute difference and make a running sum
        2. rotate the frequency and repeat step 1 until having shifted to the length of the frequency
          2.1 if the sum is less then the smallest sum found so far, keep track of it
        3. return the lowest sum found
         */
        for (var j = 0; j < frequency.length; j++) {
            var value = 0;
            for (var i = 0; i < frequency.length; i++) {
                value += Math.abs(arr[i] - reference[i]);
            }
            if (value < indexValue) {
                lowestIndex = j;
                indexValue = value;
            }
            arr = this.arrayRotate(arr, 1);
        }
        console.log(String.fromCharCode(65 + lowestIndex));
        return lowestIndex;
    };
    VigenereComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-vigenere',
            template: __webpack_require__("../../../../../src/app/vigenere/vigenere.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vigenere/vigenere.component.css")]
        })
        /**
         * General explanation for how it takes the text input and makes its initial guess
         * 1. text is taken and stored in text and a key length is taken as keyLength
         * 2. text is stripped of white space and set to uppercase
         * 3. text is stored in replacedText so all manipulations are stored there
         * 4. replacedText is used to generate a list of frequencies for each index of the key size
         * 5. list of frequencies is then used to compare to standard frequency and find which rotation of each frequency has the least
         *    amount of deviation from the standard frequency.
         * 6. shift the frequencies to the best fit as determined in step 5
         */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__utils_service__["a" /* UtilsService */]])
    ], VigenereComponent);
    return VigenereComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map