import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NxWelcomeComponent} from './nx-welcome.component';
import {ShopComponent} from './shop/shop.component';
import {SharedUiModule} from "@nx-standalone/shared/ui";
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [AppComponent, NxWelcomeComponent, ShopComponent],
    imports: [BrowserModule,
        SharedUiModule,
    RouterModule.forRoot([
        {
            path: 'cart',
            loadChildren: () => import('@nx-standalone/cart').then((m) => m.CartModule),
        },
        {
            path: '**',
            component: ShopComponent,
        }
    ])],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
