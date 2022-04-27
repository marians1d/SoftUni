import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./auth/register/register.component";
import { HomeComponent } from "./feature/pages/home/home.component";
import { NotFoundPageComponent } from "./feature/pages/not-found-page/not-found-page.component";

const routes: Routes = [
    {
        path: 'home',
        redirectTo: ''
    },
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent

    },
    {
        path: '**',
        component: NotFoundPageComponent

    }
];

export const AppRoutingModule = RouterModule.forRoot(routes);