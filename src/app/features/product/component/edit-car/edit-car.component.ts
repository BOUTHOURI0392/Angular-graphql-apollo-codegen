import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Car } from 'src/app/core/entities/car.entity';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss']
})
export class EditCarComponent implements OnInit {

  @Output() updateCarEvent = new EventEmitter<Car>();
  @Output() closeEmitter = new EventEmitter<object>();
  @Input() updateInput : Partial<Car>={};


  editCar = new Car();

  constructor() { }

  ngOnInit(): void {
  }


  updateCar() {
    this.updateCarEvent.emit(this.editCar);
  }

  close(){
    this.closeEmitter.emit();
  }
}
