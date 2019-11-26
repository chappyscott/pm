import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RentersappsListComponent } from './renterapps/renterapps-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RentersappsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
