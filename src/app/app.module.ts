import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RentersappsListComponent } from './renterapps/renterapps-list.component';
import { PhonePipe } from './shared/convert-phone-number';
import { StarComponent } from './shared/star.component'

@NgModule({
  declarations: [
    AppComponent,
    RentersappsListComponent,
    PhonePipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
