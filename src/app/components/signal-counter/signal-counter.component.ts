import { Component, computed, effect, signal } from '@angular/core';

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

  onIncrement() {
    this.counter.update((prev) => prev + 1);
  }

  onDecrement() {
    if (this.counter() > 0) this.counter.update((prev) => prev - 1);
  }
}
