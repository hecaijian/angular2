import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

//引入NgModule装饰器
import { NgModule }      from '@angular/core';
import { RouterModule } from '@angular/router';

//引入浏览器模块
import { BrowserModule } from '@angular/platform-browser';

//引入启动器
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//引入我们刚才创建的第一个component
import { AppComponent }  from './app.component';
import { MyRouterComponent } from './business/myrouter.component';

//声明一个应用模块
@NgModule({
    imports:      [ BrowserModule ,
        RouterModule.forRoot([
            { path: '', redirectTo: '/my', pathMatch: 'full' },
            {
                path:'my',
                component:MyRouterComponent
            }
            ])
    ],
    declarations: [ AppComponent ,MyRouterComponent],
    bootstrap:    [ AppComponent ],
    providers:[]
})
export class AppModule{
    constructor(){}
}

//启动应用
platformBrowserDynamic().bootstrapModule(AppModule);