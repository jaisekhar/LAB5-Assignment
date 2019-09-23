import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import {User} from "../../Models/user";
import {AngularFireAuth} from 'angularfire2/auth';
import {HomePage} from "../home/home";
import {TwitterConnect} from "@ionic-native/twitter-connect/ngx";
import * as firebase from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  LocUser = {} as User;
  tuser;
  constructor(public navCtrl: NavController, private firebaseAngAuth: AngularFireAuth, public twitterConnect: TwitterConnect) {
  }

  UserCreate(LocUser:User){
    try {
        this.firebaseAngAuth.auth.createUserWithEmailAndPassword(LocUser.email, LocUser.password).then(function () {
        alert("User Registered Successfully, Please Sign-In Now");
        LocUser.email="";
        LocUser.password="";
      }).catch(() =>
        {
          alert("Please check Email / Password");
        })
    }
    catch(e){
      console.error(e);
    }
  }

   UserLogin(user:User) {
     try {
       this.firebaseAngAuth.auth.signInWithEmailAndPassword(user.email, user.password).then(() => {
         this.navCtrl.push(HomePage);
       }).catch(() => {
         alert("Incorrect User Email-Id / User Password");
       })
     } catch (e) {
       console.error(e);
     }
   }
     tlogin(){
       this.twitterConnect.login().then(this.onSuccess, this.onError);
     }

     // onSuccess(response) {
     //   console.log('response', response);
     //   console.log(response.userName);
     //   console.log(response.userId);
     //   console.log(response.secret);
     //   console.log(response.token);
     // }

  onSuccess = response => {
    const twitterCredential = firebase.auth.TwitterAuthProvider.credential(
      response.token,
      response.secret
    );

    this.firebaseAngAuth.auth
      .signInWithCredential(twitterCredential)
      .catch(error => console.log("error", error));
  };

     onError(error) {
       console.log('error', error);
     }



}
