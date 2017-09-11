import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { AppService } from './Service/app.service'

@NgModule({
    imports: [BrowserModule, HttpModule],
  declarations: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' },AppService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
