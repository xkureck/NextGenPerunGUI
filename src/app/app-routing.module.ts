import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { MainMenuPageComponent } from './main-menu-page/main-menu-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainMenuPageComponent
  },
  {
    path: 'organizations',
    loadChildren: './vos/vos.module#VosModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
