import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FindFreelancerComponent} from './find-freelancer/find-freelancer.component';


const routes: Routes = [
   { path: 'find-freelancer', component: FindFreelancerComponent }
];

@NgModule({
  declarations: [FindFreelancerComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
