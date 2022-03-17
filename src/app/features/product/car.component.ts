import { Component } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CarService } from '../../core/services/car.service';
import { Car } from '../../core/entities/car.entity';
@Component({
  selector: 'app-home',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarViewComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Car>;

  dataSource = new MatTableDataSource<Car>();
  openNavbar: boolean = false;
  sideNavSelected: string = '';
  data: Partial<Car> = {};


  displayedColumns = [
    'name',
    'cost',
    'price',
    'created',
    'updated',
    'edit',
  ];



  constructor(
    private carService: CarService
  ) { }

  ngOnInit() {
    this.loadCars();
  }

  loadCars() {
    return this.carService.showCars().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  deleteCar(id: string) {
    return this.carService.deleteCar(id).subscribe(() => {
      console.log(id)
    })
  }

  addCar(input: Car) {
    this.carService.createCar(input).subscribe()
    this.closeNavbar()

  }

  updateCar(updateInput: Car) {
    this.carService.updateCar(updateInput).subscribe((updateInput) =>
      this.closeNavbar()
    )
  }



  selectSideNav(sideNavSelected: string) {
    this.sideNavSelected = sideNavSelected;
  }


  closeNavbar() {
    this.openNavbar = !this.openNavbar;
  }





  getData() { }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }


  filterCar(filterValue: string) {
    console.log('filter', filterValue)
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();

  }

}


