import {Component} from '@angular/core';

//声明第一个Component
@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
    <a routerLink="/my">Heroes</a>
   <router-outlet></router-outlet>
            `
})
export class AppComponent { }