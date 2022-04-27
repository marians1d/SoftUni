import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-theme-page',
  templateUrl: './theme-page.component.html',
  styleUrls: ['./theme-page.component.css']
})
export class ThemePageComponent implements OnInit {

  isLoggedIn: boolean = this.userService.isLogged;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
