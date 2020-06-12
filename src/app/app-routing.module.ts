import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminlayoutComponent } from './layouts/adminlayout/adminlayout.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: '', component: AdminlayoutComponent,
    children: [
      {path: '', loadChildren: () => import('./layouts/adminlayout/adminlayout.module').then(m => m.AdminlayoutModule)}
    ],
    runGuardsAndResolvers: 'always',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
