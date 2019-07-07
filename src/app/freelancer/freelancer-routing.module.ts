import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FindJobComponent} from './find-job/find-job.component';


const routes: Routes = [
   { path: 'find-job', component: FindJobComponent }
];

@NgModule({
  declarations: [FindJobComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreelancerRoutingModule { }
