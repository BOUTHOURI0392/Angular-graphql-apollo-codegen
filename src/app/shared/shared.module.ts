import { NgModule } from '@angular/core';
import { MaterialsModule } from './materials/material.module';

@NgModule({

  imports: [MaterialsModule],
  exports: [MaterialsModule],
})
export class SharedModule {}