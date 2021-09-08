import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

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

const routes: Routes = [
  {
    path: '',
    component: NoContentPage,
  },
];

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [NoContentPage],
})
export class NoContentPageModule {}
