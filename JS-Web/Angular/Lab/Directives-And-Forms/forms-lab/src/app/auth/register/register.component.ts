import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  @ViewChild('registerForm') form: NgForm | undefined;

  tel: string[] = [
    "+123"
  ];

  building: string[] = [
    'SomeOther',
    'AnotherOther'
  ];

  constructor() { }

  onSubmit(): void {
    console.log(this.form?.value);
    

    this.form?.reset();
  }
}
