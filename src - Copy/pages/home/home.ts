import { EmailValidator } from './../../validators/email';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from "@angular/forms";

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
      username: ['', [Validators.required, Validators.minLength(2)]],
      email: ['are@arek.pl', [EmailValidator.isValid]],
      password: ['123456', [Validators.required, Validators.maxLength(6)]],
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
