//import tool/decrator "Component"
import {Component} from '@angular/core';
//use tool/decrator "Component" to decorate the class "HomeComponent"
//to make this component available for app module, need import, and then register it in app module
//now can use this component in parent component template with selector
@Component(
    {
        selector: 'app-home',
        template: `
        <h1>Special Offer of the month {{specialOffer}}</h1>`
    }
)
export class HomeComponent{
    //the property specialOffer will be display by template above
    specialOffer="10% off all round the world flights";
}