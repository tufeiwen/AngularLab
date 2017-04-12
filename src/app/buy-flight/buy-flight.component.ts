import { Component, OnInit } from '@angular/core';
//import the service which this component need use.
import {FlightsService} from '../services/flights.service';
import {Flight} from '../model/flight';
@Component({
  selector: 'app-buy-flight',
  templateUrl: './buy-flight.component.html',
  styleUrls: ['./buy-flight.component.css']
})
export class BuyFlightComponent implements OnInit {
  //add variable flights which are dislayed by template
  flights ;
  showBuyFlight=false;
  selectedFlight:Flight;
  //inject service from constructor
  constructor(private flightService:FlightsService) { }

  ngOnInit() {
    this.flights=this.flightService.getFlights();
  }
  onClickBuyFlights(){
    this.showBuyFlight=!this.showBuyFlight;
  }
  //receives param from its template
  private onFlightClick(flight:Flight){
    this.selectedFlight=flight;
  }
}
/*
var FLIGHTS = [
  {
    "id": 11, "flightNumber": "FS1298", "origin": "LAX", "destination": "LHR", "departDay": "Monday",
    departTime: "09:00", "arriveDay": "Monday", arriveTime: "09:00", "price": 99.99
  },
  {
    "id": 12, "flightNumber": "FS1201", "origin": "LAX", "destination": "LHR", "departDay": "Tuesday",
    departTime: "09:00", "arriveDay": "Monday", arriveTime: "09:00", "price": 99.99
  },
  {
    "id": 13, "flightNumber": "FS1211", "origin": "LHR", "destination": "ARN", "departDay": "Wednesday",
    departTime: "09:00", "arriveDay": "Monday", arriveTime: "09:00", "price": 99.99
  },
];
*/