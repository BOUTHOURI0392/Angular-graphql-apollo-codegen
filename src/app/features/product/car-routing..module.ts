import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarViewComponent } from './car.component';


const routes: Routes = [
  {
    path: '',
    component: CarViewComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarRoutingModule {}