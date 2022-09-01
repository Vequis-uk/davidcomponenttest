import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  davidValue: string = '';

  davidInput(value: string) {
    this.davidValue = value;
  }
}
