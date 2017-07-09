import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userAcc = { preferences: {} };

  constructor(public navCtrl: NavController) {

  }

  submitForm() {
    console.log(this.userAcc);
  }

}
