import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ItemDescriptionComponent } from './pages/item-description/item-description.component';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { RegisterComponent } from './pages/register/register.component';


export const routes: Routes = [
    {path:"", component: MainComponent},
    {path:"login", component: LoginComponent},
    {path:"user", component: UserComponent},
    {path:"menu", component: MenuComponent},
    {path:"home", component: HomeComponent},
    {path: "item-description/:id", component: ItemDescriptionComponent},
    {path: "checkout", component: CheckoutComponent},
    {path:"register", component: RegisterComponent}
];
