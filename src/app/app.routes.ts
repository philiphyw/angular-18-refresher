import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
    {path: '', component:HomeComponent, pathMatch:'full'},
    {
        path: 'detail', 
        loadComponent:()=>import('./components/detail/detail.component').then(c=>c.DetailComponent)
    },
    {
        path: 'about', 
        loadComponent: () => import('./components/about/about.component').then(c=>c.AboutComponent),
    },
];
