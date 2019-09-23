import { NgModule } from '@angular/core';
import {IonicModule, IonicPageModule} from 'ionic-angular';
import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    IonicModule
  ],
})
export class LoginPageModule {}
