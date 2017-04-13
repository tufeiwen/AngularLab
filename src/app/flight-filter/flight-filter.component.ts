import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-flight-filter',
  templateUrl: './flight-filter.component.html',
  styleUrls: ['./flight-filter.component.css']
})
export class FlightFilterComponent implements OnInit {
  //pass function to property of child component
  @Output()
  onFilter=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  //template triggers with filterValue
  //pass filterValue to parent component function
  onFilterEnter(filterValue: string) {
    this.onFilter.emit(filterValue);
  }
}
