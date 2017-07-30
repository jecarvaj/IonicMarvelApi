webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DetailPage = (function () {
    function DetailPage(navCtrl, apiService, iab, navParams) {
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.iab = iab;
        this.navParams = navParams;
        this.characters = [];
        this.comic = this.navParams.get('id');
        this.getCharacters();
    }
    DetailPage.prototype.getCharacters = function () {
        var _this = this;
        console.log("HAY ->" + this.comic.characters.available);
        var cont = 0;
        for (var _i = 0, _a = this.comic.characters.items; _i < _a.length; _i++) {
            var item = _a[_i];
            this.apiService.getCharacters(item.resourceURI)
                .subscribe(function (data) {
                _this.characters.push(data.data.results[0]);
                console.log("EN EL PUSHO ESTA " + _this.characters[cont].thumbnail.path);
                cont++;
            });
        }
    };
    DetailPage.prototype.goToCharacter = function (url) {
        console.log("LA URL EDL CARACETR ES " + url);
        var options = 'location=no,toolbar=yes,hidden=no';
        var browser = this.iab.create(url, "_blank", options);
        browser.show();
    };
    return DetailPage;
}());
DetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detail',template:/*ion-inline-start:"C:\Users\Jean\IonicProjects\testIonic\src\pages\detail\detail.html"*/'<!--\n  Generated template for the DetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title><h4>Detalle</h4></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="content-detail">\n\n  <ion-slides pager >\n    <ion-slide *ngFor="let item of comic.images">\n      <img src="{{item.path+\'/portrait_uncanny.\'+item.extension}}"/>\n    </ion-slide>\n  </ion-slides>\n\n  <div margin="10">\n    <h3>Título</h3>\n    {{comic.title}}\n\n    <h3 *ngIf="comic.description!=null">Descripción</h3>\n    <p>{{comic.description}}</p>\n\n    <ion-list >\n      <h3 *ngIf="comic.characters.available!=0">Personajes</h3>\n      <ion-item class="dark-background" *ngFor="let personaje of characters" (click)="goToCharacter(personaje.urls[0].url)">\n\n        <ion-thumbnail item-start>\n          <img src="{{personaje.thumbnail.path+\'/standard_medium.\'+personaje.thumbnail.extension}}"/>\n        </ion-thumbnail>\n        <h2>{{personaje.name}}</h2>\n\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <h3 *ngIf="comic.creators.available!=0">Creadores</h3>\n      <ion-item class="dark-background"  *ngFor="let item of comic.creators.items">\n\n        <h4>{{item.name}}</h4>\n        <p>{{item.role}}</p>\n\n      </ion-item>\n    </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jean\IonicProjects\testIonic\src\pages\detail\detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], DetailPage);

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detail/detail.module": [
		269,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 151;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_detail__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, apiService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.loadingCtrl = loadingCtrl;
        this.comics = [];
        this.comicsCopy = [];
        this.ids = [];
        this.yearSearch = "0";
        this.limit = 20;
        this.offset = 0;
        this.offsetSearch = 0;
        this.statusSearch = false;
        this.searchBarStatusCheck = false;
        this.placeholder = "Buscar título y/o año";
        console.log("CONSTRUCTOR HOME");
        this.loading = this.loadingCtrl.create();
        this.loading.present();
        this.loadData();
    }
    HomePage.prototype.showBar = function () {
        this.searchBarStatusCheck = !this.searchBarStatusCheck;
    };
    HomePage.prototype.cancelBar = function () {
        this.comics = this.comicsCopy;
        this.showBar();
    };
    HomePage.prototype.loadData = function () {
        var _this = this;
        console.log("LOAD DATA");
        this.apiService.getComics(0, this.limit)
            .subscribe(function (data) {
            _this.loading.dismiss();
            _this.comics = data.data.results;
            _this.comicsCopy = _this.comics;
        });
    };
    HomePage.prototype.getData = function () {
        var _this = this;
        var searchWithoutYear = [];
        for (var _i = 0, _a = this.nameSearch.split(" "); _i < _a.length; _i++) {
            var sr = _a[_i];
            if (sr.trim().match(/[1-2][0-9]{3}/)) {
                this.yearSearch = sr;
            }
            else {
                searchWithoutYear.push(sr.trim());
            }
        }
        this.nameSearch = searchWithoutYear.join(" ");
        this.apiService.getByNameAndYear(this.nameSearch, this.offsetSearch, this.limit, this.yearSearch)
            .subscribe(function (data) {
            _this.comics = data.data.results;
            _this.numsSearch = data.data.total;
        });
    };
    HomePage.prototype.searchData = function (ev) {
        this.nameSearch = ev.target.value;
        this.yearSearch = "0";
        if (this.nameSearch && this.nameSearch.trim() != '' && this.nameSearch.length > 2) {
            this.statusSearch = true;
            this.getData();
        }
        else {
            this.statusSearch = false;
            this.offsetSearch = 0;
            this.comics = this.comicsCopy;
        }
    };
    HomePage.prototype.doInfinite = function (ev) {
        var _this = this;
        if (this.statusSearch) {
            if (this.numsSearch > this.comics.length) {
                this.offsetSearch += this.limit;
                this.apiService.getByNameAndYear(this.nameSearch, this.offsetSearch, this.limit, this.yearSearch)
                    .subscribe(function (data) {
                    for (var _i = 0, _a = data.data.results; _i < _a.length; _i++) {
                        var item = _a[_i];
                        _this.comics.push(item);
                    }
                    _this.numsSearch = data.data.total;
                    ev.complete();
                });
            }
            else {
                this.offsetSearch = 0;
                ev.complete();
            }
        }
        else {
            this.offset += this.limit;
            this.apiService.getComics(this.offset + 1, this.limit)
                .subscribe(function (data) {
                for (var _i = 0, _a = data.data.results; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (_this.ids.indexOf(item.id) < 0) {
                        _this.comics.push(item);
                        _this.ids.push(item.id);
                    }
                }
                ev.complete();
            });
        }
    };
    HomePage.prototype.goToDetail = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detail_detail__["a" /* DetailPage */], { id: id });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Jean\IonicProjects\testIonic\src\pages\home\home.html"*/'<ion-header >\n\n  <ion-navbar  color="primary">\n    <ion-searchbar [placeholder]=\'placeholder\'   *ngIf="searchBarStatusCheck" [showCancelButton]="true" (ionCancel)="cancelBar()"  (ionInput)="searchData($event)" [debounce]="800" ></ion-searchbar>\n    <ion-buttons start>\n      <button ion-button icon-only color="royal" (click)="showBar()">\n       <ion-icon name="search" ></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title *ngIf="!searchBarStatusCheck" >Marvel Comics</ion-title>\n\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="card-background-page">\n\n  <ion-card *ngFor="let comic of comics " (click)="goToDetail(comic)">\n    <img src="{{comic.thumbnail.path+\'/standard_fantastic.jpg\'}}"/>\n    <div class="card-title">{{comic.title}}</div>\n  </ion-card>\n\n  <ion-infinite-scroll  (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jean\IonicProjects\testIonic\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(216);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_api_service_api_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__["a" /* DetailPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/detail/detail.module#DetailPageModule', name: 'DetailPage', segment: 'detail', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__["a" /* DetailPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_7__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Jean\IonicProjects\testIonic\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Jean\IonicProjects\testIonic\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var ApiServiceProvider = (function () {
    function ApiServiceProvider(http) {
        this.http = http;
        /*---------------------------PARA CONECTAR A API---------------------------------------*/
        this.publicKey = "8d8b1c6968676071d05852ede59fd4a0";
        this.privateKey = "74d4882e05508b1ba353a936aa464eabced1719b";
        this.timestamp = Date.now();
        this.apiHash = __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__["Md5"].hashStr(this.timestamp + this.privateKey + this.publicKey);
        this.tokenUrl = "?ts=" + this.timestamp
            + "&apikey=" + this.publicKey
            + "&hash=" + this.apiHash;
        this.urlComics = "https://gateway.marvel.com/v1/public/comics"
            + this.tokenUrl
            + "&format=comic"
            + "&hasDigitalIssue=true";
        console.log('Hello UserServiceProvider Provider :');
    }
    ApiServiceProvider.prototype.getComics = function (offset, limit) {
        console.log('EN GET COMIC');
        var url = this.urlComics + "&offset=" + offset + "&limit=" + limit;
        console.log("URL ES " + url);
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    ApiServiceProvider.prototype.getCharacters = function (url) {
        return this.http.get(url + this.tokenUrl)
            .map(function (res) { return res.json(); });
    };
    ApiServiceProvider.prototype.getByNameAndYear = function (name, offset, limit, year) {
        var url;
        if (year == 0) {
            url = this.urlComics + "&titleStartsWith=" + name + "&offset=" + offset + "&limit=" + limit;
        }
        else if (name != "") {
            url = this.urlComics + "&titleStartsWith=" + name + "&offset=" + offset + "&limit=" + limit + "&startYear=" + year;
        }
        else {
            url = this.urlComics + "&offset=" + offset + "&limit=" + limit + "&startYear=" + year;
        }
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    return ApiServiceProvider;
}());
ApiServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ApiServiceProvider);

//# sourceMappingURL=api-service.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map