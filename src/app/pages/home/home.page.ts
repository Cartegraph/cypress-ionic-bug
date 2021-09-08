import { Component } from '@angular/core';

// eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  itWorked = "It's not working...";

  clickButton($event: any) {
    console.log($event);
    this.itWorked = "It worked!";
  }
}
