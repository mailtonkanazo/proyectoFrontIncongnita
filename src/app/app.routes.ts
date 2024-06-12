import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


import { Receta1Component } from './pages/camisaNegraHombre/receta1.component';

import { FormularioComponent } from './formulario/formulario.component';
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ItemDescriptionComponent } from './pages/item-description/item-description.component';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';


export const routes: Routes = [
    {path:"", component: MainComponent},
    {path:"login", component: LoginComponent},
    {path:"user", component: UserComponent},
    {path:"menu", component: MenuComponent},
    {path:"home", component: HomeComponent},
    {path:"receta1", component: Receta1Component},
    {path:"formulario", component: FormularioComponent},
    {path: "item-description", component: ItemDescriptionComponent}
];
