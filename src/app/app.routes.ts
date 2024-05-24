import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { Receta1Component } from './pages/camisaNegraHombre/receta1.component';

import { FormularioComponent } from './formulario/formulario.component';

export const routes: Routes = [
    {path:"", component: HomeComponent},
    {path:"receta1", component: Receta1Component},
    {path:"formulario", component: FormularioComponent},
  

];
