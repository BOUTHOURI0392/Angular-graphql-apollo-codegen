import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss']
})
export class LeftBarComponent implements OnInit {


  @Input() text !: string;

  @Output() filterEmitter = new EventEmitter<string>();


 dataFilter !: string;

  constructor() { }

  ngOnInit(): void {
  }

applyFilter(){
  this.filterEmitter.emit(this.dataFilter)
}
 

}
