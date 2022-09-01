import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Created a property here and assigned it to an empty string, to be used below:
  davidProperty: string = '';

  // Created a meathod here that is assigning the above property to value, which is a parameter
  davidMeathod(value: string) {
    this.davidProperty = value;
  }
}
