import { Component } from '@angular/core';

// eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
@Component({
  selector: 'app-no-event',
  templateUrl: './no-event.page.html',
  styleUrls: ['./no-event.page.scss'],
})
export class NoEventPage {
  itWorked = "It's not working...";

  clickButton($event: any) {
    console.log($event);
    this.itWorked = "It worked!";
  }
}
