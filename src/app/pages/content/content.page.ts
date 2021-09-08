import { Component } from '@angular/core';

// eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
@Component({
  selector: 'app-content',
  template: `
    <ion-content [scrollEvents]="true">
      <button (click)="clickButton($event)">{{ itWorked }}</button>
    </ion-content>
  `,
})
export class ContentPage {
  itWorked = "It's not working...";

  clickButton($event: any) {
    console.log($event);
    this.itWorked = 'It worked!';
  }
}
