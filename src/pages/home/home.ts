import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder, FormArray } from "@angular/forms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userAcc = { preferences: {} };
  user: FormGroup;
  changeLog: string[] = [];

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {

    this.user = this.formBuilder.group({
      username: ['Arek'],
      email: ['are@arek.pl'],
      password: ['123456'],
      preferences: this.formBuilder.group({
        date: [''],
        notes: ['Moje notatki!']
      }),
      addresses: this.formBuilder.array([
        this.getInitialAddress()
      ])
    });

    const nameControl = this.user.get('username')
    nameControl.valueChanges.forEach(
      (value: string) => this.changeLog.push(value)
    );
  }

  getInitialAddress() {
    return this.formBuilder.group({
      street: [''],
      postcode: ['']
    });
  }

  addAddress() {
    const control = <FormArray>this.user.controls['addresses'];
    control.push(this.getInitialAddress());
  }

  removeAddress(i: number) {
    const control = <FormArray>this.user.controls['addresses'];
    control.removeAt(i);
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
