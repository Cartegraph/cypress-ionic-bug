import { Component } from '@angular/core';

// eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
@Component({
  selector: 'app-no-content',
  template: `
    <div style="height: 1000px"></div>
    <button (click)="clickButton($event)">{{ itWorked }}</button>
  `,
})
export class NoContentPage {
  itWorked = "It's not working...";

  clickButton($event: any) {
    console.log($event);
    this.itWorked = 'It worked!';
  }
}
