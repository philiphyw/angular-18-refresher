import { Component } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { SignalCounterComponent } from "../signal-counter/signal-counter.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HighlightDirective, SignalCounterComponent,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  counterPrefix = '';
}
