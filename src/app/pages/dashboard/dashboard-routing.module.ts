import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'employer',
  loadChildren: () => import('./employer/ecommerce.module').then(m => m.EcommerceModule)
},

{
  path: 'posts',
  loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
},
{
  path: 'jobs',
  loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule)
},
{
  path: 'current',
  loadChildren: () => import('./current-jobs/current.module').then(m => m.CurrentModule)
},

{
  path: 'employee',
  loadChildren: () => import('./employee/analytics.module').then(m => m.AnalyticsModule)
},
{
  path: '',
  redirectTo: 'employer',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
