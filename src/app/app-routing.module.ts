import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NosotrosComponent } from './utilidades/nosotros/nosotros.component';

const routes: Routes = [
  {path: '',component: LandingpageComponent},
 // {path:'admin', component: AdminComponent},
  {path:"nosotros", component: NosotrosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
