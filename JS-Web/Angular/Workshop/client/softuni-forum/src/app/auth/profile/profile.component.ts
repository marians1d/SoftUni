import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/core/interfaces';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('editProfileForm') editProfileForm!: NgForm;

  isEditing: boolean = false;

  userProfile: IUser = {
    themes: [''],
    posts: [''],
    tel: '',
    email: '',
    username: '',
    password: '',
    _id: '',
    created_at: '',
    updatedAt: '',
    __v: 0
  };

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getProfile$().subscribe({
      next: (user) => {
        this.userProfile = user;
      },
      error: () => {
        this.router.navigate(['/login'])
      }
    });
  }


  enterEditMode(): void {
    this.isEditing = !this.isEditing;

    setTimeout(() => {
      this.editProfileForm.form.patchValue({
        username: this.userProfile.username,
        email: this.userProfile.email,
        telRegion: this.userProfile.tel ? this.userProfile.tel.substring(0, 5) : '',
        tel: this.userProfile.tel ? this.userProfile.tel.substring(5) : ''
      });
    });
  }

  updateProfile(): void {
    console.log(this.editProfileForm.value);

    this.isEditing = !this.isEditing;
  }
}
