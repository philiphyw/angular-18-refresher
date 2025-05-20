import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../../directives/highlight.directive';
import { LoadingService } from '../../services/loading.service';
import { SignalCounterComponent } from "../signal-counter/signal-counter.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HighlightDirective, SignalCounterComponent,FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  counterActionList = viewChild<ElementRef>("counterActionList");
  counterPrefix = '';
  counterActions = signal<string[]>([]);
  loadingService = inject(LoadingService);

  onGetCounterActions(actions: string[]) {
    this.counterActions.update(() => [...actions]);
  }

  onStartLoading(){
    this.loadingService.startLoading()
  }

  onAddHostHeight(){
    const hostHeight = this.counterActionList()?.nativeElement.scrollHeight;
    console.log('monitor:', hostHeight);
  this.counterActionList()?.nativeElement.setAttribute('style', `min-height: ${hostHeight+200}px; background: red`);
  }
}
