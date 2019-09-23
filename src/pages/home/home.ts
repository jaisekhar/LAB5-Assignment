import { Component } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database';
import {AngularFireAuth} from "@angular/fire/auth";
import {Observable} from "rxjs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public displayGeoResults : Observable<any[]>;
  public getGeoLocations : any;

  constructor(public AngularFireBaseDB: AngularFireDatabase, public FireAuthAng: AngularFireAuth) {
    this.displayGeoResults = AngularFireBaseDB.list(this.FireAuthAng.auth.currentUser.uid).valueChanges();
    this.displayGeoResults.subscribe((geoLocsList: any) =>{
      this.getGeoLocations=geoLocsList;
    });
  }

  LocationSubmit() {
    const currentLoggedInUser = this.AngularFireBaseDB.list(this.FireAuthAng.auth.currentUser.uid);
    console.log(currentLoggedInUser);
    navigator.geolocation.getCurrentPosition(geoLocationSuccessCall, geoLocationErrorCall, {enableHighAccuracy: true});

    function geoLocationSuccessCall(location){
      let ts = new Date();
      currentLoggedInUser.push({
        'GeoLocTimestamp' : ts.getTime(),
        'GeoLocLatitude' : location.coords.latitude,
        'GeoLocLongitude' : location.coords.longitude});
    }
    function geoLocationErrorCall(error) {
      alert('errorCode: ' + error.code + '\n' +
        'errorMessage: ' + error.message + '\n');
    }
  }
}
