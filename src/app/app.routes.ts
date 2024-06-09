import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExploremenuComponent } from './pages/home/exploremenu/exploremenu.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    { path:"", component: HomeComponent},
    {path:"", component: ExploremenuComponent},
    {path:"login", component: LoginComponent},
    {path:"register", component: RegisterComponent}
];
