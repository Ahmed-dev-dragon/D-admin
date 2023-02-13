import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





import { ContentLayoutComponent } from './shared/components/layout/content-layout/content-layout.component';
import { content } from './shared/routes/content-routes';

const routes: Routes = [
  // {
  //   path: 'login',
  //   component: LoginComponent,
  //   // canActivate: [LoginGuard],
  // },

  {
    path: '',
    component: ContentLayoutComponent,
    children: content,
    data: {
      title: '',
      type: 'content',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
