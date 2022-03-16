import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarRoutingModule } from './car-routing..module';
import { CarViewComponent } from './car.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddCarComponent } from './component/add-car/add-car.component';
import { EditCarComponent } from './component/edit-car/edit-car.component';
import { LeftBarComponent } from './component/left-bar/left-bar.component';



@NgModule({
  declarations: [
    CarViewComponent,
    AddCarComponent,
    EditCarComponent,
    LeftBarComponent,
    
   
  ],
  imports: [CarRoutingModule, SharedModule, CommonModule, FormsModule],
})
export class CarModule {}