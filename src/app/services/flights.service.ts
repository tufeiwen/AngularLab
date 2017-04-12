import { Injectable } from '@angular/core';
//import the Type(interface)
import {Flight} from '../model/flight';
//import the data
import {FLIGHTS} from '../model/mock-flights';
@Injectable()
export class FlightsService {

  constructor() { }
  public getFlights():Flight[]{
    //check if data from service by log
    console.log("get data by flight service");
    return FLIGHTS;
  }
}
