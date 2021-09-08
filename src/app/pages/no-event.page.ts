import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

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

const routes: Routes = [
  {
    path: '',
    component: NoEventPage,
  },
];

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [NoEventPage],
})
export class NoEventPageModule {}
