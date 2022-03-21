import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './modules/angular-material.module';
import { AppComponent } from './app.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import {MAT_SNACK_BAR_DATA} from '@angular/material';
@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, AngularMaterialModule],
  declarations: [AppComponent, SnackbarComponent],
  entryComponents: [SnackbarComponent],
  // no idea why MAT_SNACK_BAR_DATA is needed here, but it errors otherwise..
  providers: [ { provide: MAT_SNACK_BAR_DATA, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
