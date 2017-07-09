import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userAcc = { preferences: {} };
  user: FormGroup;

  constructor(public navCtrl: NavController) {
    this.user = new FormGroup({
      username: new FormControl('Arek'),
      email: new FormControl('are@arek.pl'),
      password: new FormControl('123456'),
      preferences: new FormGroup({
        date: new FormControl(),
        notes: new FormControl('Moje notatki!')
      })
    });
  }

  submitForm() {
    console.log(this.userAcc);
  }

  formSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log('user:  ', value);
    console.log('valid:  ', valid);
  }

}

export interface User {
  username: string;
  email: string;
  password: string;
  preferences: {
    date: Date;
    notes: string;
  }
}
