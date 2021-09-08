import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./pages/home.page").then((m) => m.HomePageModule),
  },
  {
    path: "content",
    loadChildren: () => import("./pages/content.page").then((m) => m.ContentPageModule),
  },
  {
    path: "no-event",
    loadChildren: () => import("./pages/no-event.page").then((m) => m.NoEventPageModule),
  },
  {
    path: "no-content",
    loadChildren: () => import("./pages/no-content.page").then((m) => m.NoContentPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
