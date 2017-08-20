"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
require('core-js/es6');
require('core-js/es7/reflect');
require('zone.js/dist/zone');
//引入NgModule装饰器
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
//引入浏览器模块
var platform_browser_1 = require('@angular/platform-browser');
//引入启动器
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
//引入我们刚才创建的第一个component
var app_component_1 = require('./app.component');
var myrouter_component_1 = require('./business/myrouter.component');
//声明一个应用模块
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([
                    { path: '', redirectTo: '/my', pathMatch: 'full' },
                    {
                        path: 'my',
                        component: myrouter_component_1.MyRouterComponent
                    }
                ])
            ],
            declarations: [app_component_1.AppComponent, myrouter_component_1.MyRouterComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: []
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//启动应用
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=app.module.js.map