import { Routes } from '@angular/router';
import { ListeDesTachesComponent } from './components/liste-des-taches/liste-des-taches.component';

export const routes: Routes = [
    {
        path: "TodoList",
        component : ListeDesTachesComponent
    },
    {
        path :"",
        redirectTo :"/TodoList",
        pathMatch : 'full'
    }
];
