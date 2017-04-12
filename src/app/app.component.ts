import { Component } from '@angular/core';
//import the service which need to be registered.
import {FlightsService} from './services/flights.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //register a service, it's available for this component and all its child components
  providers:[FlightsService]
})
export class AppComponent {
  title = "Welcome to Fly Sharp";
}
