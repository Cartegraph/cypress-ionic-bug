import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./pages/home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "spacer",
    loadChildren: () => import("./pages/spacer/spacer.module").then((m) => m.SpacerPageModule),
  },
  {
    path: "content",
    loadChildren: () => import("./pages/content/content.module").then((m) => m.ContentPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
