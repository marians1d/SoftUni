import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { PostListComponent } from './post-list/post-list.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { ThemePageComponent } from './theme-page/theme-page.component';
import { ThemesRoutingModule } from './themes-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { NewThemePageComponent } from './new-theme-page/new-theme-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AsideComponent,
    PostListComponent,
    ThemeListComponent,
    ThemeListItemComponent,
    ThemePageComponent,
    ThemeDetailsComponent,
    NewThemePageComponent
  ],
  imports: [
    CommonModule,
    ThemesRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    ThemePageComponent
  ]
})
export class ThemesModule { }
