import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./pages/home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "content",
    loadChildren: () => import("./pages/content/content.module").then((m) => m.ContentPageModule),
  },
  {
    path: "no-event",
    loadChildren: () => import("./pages/no-event/no-event.module").then((m) => m.NoEventPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
