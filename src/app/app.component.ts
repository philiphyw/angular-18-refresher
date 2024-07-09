import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavMenuComponent } from "./components/nav-menu/nav-menu.component";
import { DetailComponent } from './components/detail/detail.component';
import { AboutComponent } from './components/about/about.component';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HomeComponent, 
    NavMenuComponent,
    DetailComponent,
    AboutComponent,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-18-refresher';
}
