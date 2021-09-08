import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { NoContentPage as NoContentPage } from './no-content.page';

const routes: Routes = [
  {
    path: "",
    component: NoContentPage,
  },
];

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [NoContentPage],
})
export class NoContentPageModule {}
