import { Component } from '@angular/core';

// eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage {
  itWorked = "It's not working...";

  clickButton($event: any) {
    console.log($event);
    this.itWorked = "It worked!";
  }
}
