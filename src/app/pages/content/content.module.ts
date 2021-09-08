import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ContentPage as ContentPage } from './content.page';

const routes: Routes = [
  {
    path: "",
    component: ContentPage,
  },
];

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [ContentPage],
})
export class ContentPageModule {}
