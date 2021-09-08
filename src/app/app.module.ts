import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicModule } from "@ionic/angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot({
      mode: "ios",
      swipeBackEnabled: false,
      animated: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
