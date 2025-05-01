import { Component, computed, effect, input, output, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-signal-counter',
  standalone: true,
  imports: [],
  templateUrl: './signal-counter.component.html',
  styleUrl: './signal-counter.component.css',
})
export class SignalCounterComponent {
  counter = signal<number>(0);
  doubleCounter = computed(() => this.counter() * 2);
  printCounter = effect(() =>{console.log(`effect print current counter: ${this.counter()} at ${new Date().toLocaleString()}`)});
  counterActionLog = signal<string[]>([]);

  counterPrefix = input.required<String>();
  getCounterActionLog = output<string[]>({
    alias: 'getActions',
  });
  onIncrement() {
    this.counter.update((prev) => prev + 1);
    this.onUpdateCounterActionLog('increment');
  }
  
  onDecrement() {
    if (this.counter() > 0) this.counter.update((prev) => prev - 1);
    this.onUpdateCounterActionLog('decrement');
  }

  onUpdateCounterActionLog(action:string) {
    this.counterActionLog.update((prev) => [...prev, action]);
    this.getCounterActionLog.emit(this.counterActionLog());
  }
}
