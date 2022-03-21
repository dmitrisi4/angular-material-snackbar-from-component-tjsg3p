import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {SnackbarComponent} from './components/snackbar/snackbar.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  message = 'Pizza party!!! 🍕'
  constructor(
    public snackBar: MatSnackBar
  ) {}

    pizzaParty() {
      this.openSnackBar(this.message, 'pizza-party');
    }

    openSnackBar(message: string, panelClass: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      panelClass: panelClass,
      duration: 10000
    });
  }
}
