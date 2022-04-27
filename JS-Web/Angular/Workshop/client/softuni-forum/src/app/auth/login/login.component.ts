import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user.service';
import { emailValidator } from '../util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  errorMessage: string = '';

  loginFormGroup: FormGroup = this.formBuilder.group({
    email: new FormControl('', [Validators.required, emailValidator]),
    password: new FormControl(null, [Validators.required, Validators.minLength(5)])   
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  handleLogin(): void {
    this.errorMessage = '';
    this.userService.login$(this.loginFormGroup.value).subscribe({
      next: user => {
        this.router.navigate(['/home']);
      },
      complete: () => {
        console.log('Login stream completed');
      },
      error: err => {
        this.errorMessage = err.error.message;
      }
    });
  }
}
