import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Car } from 'src/app/core/entities/car.entity';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {

  constructor() { }

  @Output() newCreateCarEvent = new EventEmitter<Car>();
  @Output() closeEmitter = new EventEmitter<object>();



  input = new Car();

  ngOnInit(): void {
  }


  addCar() {
    this.newCreateCarEvent.emit(this.input)
  }

  close() {
    this.closeEmitter.emit()
  }
}
