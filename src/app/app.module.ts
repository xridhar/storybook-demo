import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from '../stories/button.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [AppComponent, ImageComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
