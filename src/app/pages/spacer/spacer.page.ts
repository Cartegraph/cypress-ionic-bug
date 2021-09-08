import { Component } from '@angular/core';

// eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
@Component({
  selector: 'app-spacer',
  templateUrl: './spacer.page.html',
  styleUrls: ['./spacer.page.scss'],
})
export class SpacerPage {
  itWorked = "It's not working...";

  clickButton($event: any) {
    console.log($event);
    this.itWorked = "It worked!";
  }
}
