import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { NewThemePageComponent } from './new-theme-page/new-theme-page.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { ThemePageComponent } from './theme-page/theme-page.component';

const routes: Routes = [
  {
    path: 'themes',
    component: ThemePageComponent,
  },
  {
    path: 'themes/new',
    // TODO mariyan: uncoment below.
    // canActivate: [AuthGuard],
    component: NewThemePageComponent,
  },
  {
    path: 'themes/:themeId',
    component: ThemeDetailsComponent,
  },
];

export const ThemesRoutingModule = RouterModule.forChild(routes);
