import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/page-modules/login-page/login-page.component';
import { SelectCharacterPageComponent } from './components/page-modules/select-character-page/select-character-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SelectCharacterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
