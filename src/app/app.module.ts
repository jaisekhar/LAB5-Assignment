import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, LoadingController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { Camera } from '@ionic-native/camera/ngx';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import { AngularFirestoreModule} from 'angularfire2/firestore';
import  {Geolocation} from "@ionic-native/geolocation/ngx";
import { TwitterConnect } from '@ionic-native/twitter-connect/ngx';

const firebaseConfig = {
  apiKey: "AIzaSyAQuKhz7_TfamQ01VxuOFO8sFBUSg8v_hc",
  authDomain: "aseclassjs.firebaseapp.com",
  databaseURL: "https://aseclassjs.firebaseio.com",
  projectId: "aseclassjs",
  storageBucket: "aseclassjs.appspot.com",
  messagingSenderId: "948505125934",
  appId: "1:948505125934:web:1a6fac71a609fa48ababbf"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule,
    AngularFirestoreModule.enablePersistence()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalNotifications,
    Geolocation,
    AngularFireAuth,
    TwitterConnect,
    LoadingController
  ]
})
export class AppModule {}
