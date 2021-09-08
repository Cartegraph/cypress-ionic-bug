import { Component } from '@angular/core';

// eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
@Component({
  selector: 'app-no-event',
  template: `
    <ion-content>
      <div style="height: 1000px"></div>
      <button (click)="clickButton($event)">{{ itWorked }}</button>
    </ion-content>
  `,
})
export class NoEventPage {
  itWorked = "It's not working...";

  clickButton($event: any) {
    console.log($event);
    this.itWorked = 'It worked!';
  }
}
