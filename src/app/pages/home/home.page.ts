import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

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

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
];

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [HomePage],
})
export class HomePageModule {}
