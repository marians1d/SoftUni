import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost, ITheme } from 'src/app/core/interfaces';
import { ThemeService } from 'src/app/core/theme.service';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-theme-details',
  templateUrl: './theme-details.component.html',
  styleUrls: ['./theme-details.component.css'],
})
export class ThemeDetailsComponent implements OnInit {
  theme: ITheme<IPost> | undefined;

  canSubscribe: boolean = false;
  isLoggedIn: boolean = this.userService.isLogged;

  constructor(
    private activateRoute: ActivatedRoute,
    private themeService: ThemeService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const themeId = this.activateRoute.snapshot.params['themeId'];

    this.themeService.loadThemeById(themeId).subscribe((theme) => {
      this.theme = theme;
      this.canSubscribe = !this.theme.subscribers.includes(
        '5fa64b162183ce1728ff371d'
      );
    });
  }

  canLike(comment: IPost): boolean {
    return !comment.likes.includes('5fa64b162183ce1728ff371d');
  }
}
