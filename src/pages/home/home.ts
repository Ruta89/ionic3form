import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userAcc = { preferences: {} };
  user: FormGroup;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {

    this.user = this.formBuilder.group({
      username: ['Arek'],
      email: ['are@arek.pl'],
      password: ['123456'],
      preferences: this.formBuilder.group({
        date: [''],
        notes: ['Moje notatki!']
      })
    });
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
