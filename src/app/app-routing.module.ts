import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], },
  { path: 'courses', canActivate: [AuthGuard], loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
=======
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
>>>>>>> 244d30ea6dbaf1cb99887af2ec8c9f6bff474d86
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
