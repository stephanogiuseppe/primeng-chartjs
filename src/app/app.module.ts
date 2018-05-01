import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  MessagesModule,
  GrowlModule
} from 'primeng/primeng';
import { ChartModule } from 'primeng/chart';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MessagesModule,
    GrowlModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
