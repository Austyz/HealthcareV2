import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { NewAppointmentComponent } from './Pages/new-appointment/new-appointment.component';
import { AppointmentListComponent } from './Pages/appointment-list/appointment-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'new',
    component: NewAppointmentComponent
  },
  {
    path:'list',
    component: AppointmentListComponent
  }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
