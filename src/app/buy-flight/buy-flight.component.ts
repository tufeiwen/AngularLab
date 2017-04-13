import { Component, OnInit } from '@angular/core';
//import the service which this component need use.
import { FlightsService } from '../services/flights.service';
import { Flight } from '../model/flight';
@Component({
  selector: 'app-buy-flight',
  templateUrl: './buy-flight.component.html',
  styleUrls: ['./buy-flight.component.css']
})
export class BuyFlightComponent implements OnInit {
  //add variable flights which are dislayed by template
  _flights;
  showBuyFlight = false;
  selectedFlight: Flight;
  originFilter: string = null;
  //inject service from constructor
  constructor(private flightService: FlightsService) { }

  ngOnInit() {
    //init _flights with service
    this._flights = this.flightService.getFlights();
  }
  onClickBuyFlights() {
    this.showBuyFlight = !this.showBuyFlight;
  }
  //receives param from its template
  private onFlightClick(flight: Flight) {
    this.selectedFlight = flight;
  }
  onFilterChange(filterValue: string) {
    this.originFilter = filterValue;
  }
  get flights(): Flight[] {
    if (this.originFilter != null) {
      return this._flights.map(
        (flight) => {
         // console.log(flight);
          let match = flight.origin.startsWith(this.originFilter);//return boolean
          if (match) {
            console.log("filtered flight: "+flight);
            return flight;
          }
        }
      ).filter(x => !!x);
    } else {
      return this._flights;
    }
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