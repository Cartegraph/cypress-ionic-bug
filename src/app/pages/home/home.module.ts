import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { HomePage as HomePage } from './home.page';

const routes: Routes = [
  {
    path: "",
    component: HomePage,
  },
];

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [HomePage],
})
export class HomePageModule {}