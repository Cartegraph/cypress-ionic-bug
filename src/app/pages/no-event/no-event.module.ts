import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { NoEventPage as NoEventPage } from './no-event.page';

const routes: Routes = [
  {
    path: "",
    component: NoEventPage,
  },
];

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [NoEventPage],
})
export class NoEventPageModule {}
