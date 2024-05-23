import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { Receta1Component } from './pages/receta1/receta1.component';
import { Receta2Component } from './pages/receta2/receta2.component';
import { Receta3Component } from './pages/receta3/receta3.component';
import { Receta4Component } from './pages/receta4/receta4.component';
import { Receta5Component } from './pages/receta5/receta5.component';
import { Receta6Component } from './pages/receta6/receta6.component';

import { FormularioComponent } from './formulario/formulario.component';

export const routes: Routes = [
    {path:"", component: HomeComponent},
    {path:"receta1", component: Receta1Component},
    {path:"formulario", component: FormularioComponent},
    {path:"receta2", component: Receta2Component},
    {path:"receta3", component: Receta3Component},
    {path:"receta4", component: Receta4Component},
    {path:"receta5", component: Receta5Component},
    {path:"receta6", component: Receta6Component},

];
