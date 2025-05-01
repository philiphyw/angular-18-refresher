import { Component } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { SignalCounterComponent } from "../signal-counter/signal-counter.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HighlightDirective, SignalCounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
