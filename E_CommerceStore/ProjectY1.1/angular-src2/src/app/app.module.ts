
// Basic angular modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Bring all OUR components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard, AdminGuard } from './shared';
import { ValidateService } from './shared';
import { AuthService, SharedService, ProductService, CategoryService, CountryService, CartService } from './shared';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
    ],
    providers: [ValidateService, AuthService, SharedService, AuthGuard, AdminGuard, ProductService, CategoryService, CountryService, CartService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
