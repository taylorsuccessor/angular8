import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: 'employer', loadChildren: () => import('./employer/employer.module').then(m => m.EmployerModule)},
    {path: 'freelancer', loadChildren: () => import('./freelancer/freelancer.module').then(m => m.FreelancerModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
