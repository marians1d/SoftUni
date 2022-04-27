import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateUserDto, UserService } from 'src/app/core/user.service';
import { emailValidator, passwordMatch } from '../util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  passwordControl = new FormControl(null, [
    Validators.required,
    Validators.minLength(5),
  ]);

  get passwordGroup(): FormGroup {
    return this.registerFormGroup.controls['passwords'] as FormGroup;
  }

  registerFormGroup: FormGroup = this.formBuilder.group({
    username: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
    ]),
    email: new FormControl(null, [Validators.required, emailValidator]),
    passwords: new FormGroup({
      password: this.passwordControl,
      repass: new FormControl(null, [passwordMatch(this.passwordControl)]),
    }),
    tel: new FormControl(''),
    telRegion: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {}

  handleRegister(): void {
    const {username, email, passwords, tel, telRegion } = this.registerFormGroup.value;

    const body: CreateUserDto = {
      username: username,
      email: email,
      password: passwords.password
    }

    if (tel && telRegion) {
      body.tel = telRegion + tel;
    }

    this.userService.register$(body).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
