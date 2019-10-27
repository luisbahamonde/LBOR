import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {HTTP} from '@ionic-native/http/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import es from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';

registerLocaleData(es);

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        IonicModule.forRoot({
            backButtonText: 'Atras',
        }),
        AppRoutingModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        HTTP,
        {provide: LOCALE_ID, useValue: 'es'},
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
