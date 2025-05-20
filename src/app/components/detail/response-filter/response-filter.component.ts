import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-response-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './response-filter.component.html',
  styleUrl: './response-filter.component.css'
})
export class ResponseFilterComponent {
filterText = model('');
}
