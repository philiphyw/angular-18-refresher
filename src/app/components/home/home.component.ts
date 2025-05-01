import { Component, signal } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { SignalCounterComponent } from "../signal-counter/signal-counter.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HighlightDirective, SignalCounterComponent,FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  counterPrefix = '';
  counterActions = signal<string[]>([]);

  onGetCounterActions(actions: string[]) {
    this.counterActions.update(() => [...actions]);
  }
}
