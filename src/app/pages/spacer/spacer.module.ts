import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { SpacerPage as SpacerPage } from './spacer.page';

const routes: Routes = [
  {
    path: "",
    component: SpacerPage,
  },
];

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [SpacerPage],
})
export class SpacerPageModule {}
