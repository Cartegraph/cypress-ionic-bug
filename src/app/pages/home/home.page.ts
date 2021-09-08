import { Component } from '@angular/core';

// eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
@Component({
  selector: 'app-home',
  template: `
    <ion-content [scrollEvents]="true">
      <div style="height: 1000px"></div>
      <button (click)="clickButton($event)">{{ itWorked }}</button>
    </ion-content>
  `,
})
export class HomePage {
  itWorked = "It's not working...";

  clickButton($event: any) {
    console.log($event);
    this.itWorked = 'It worked!';
  }
}
