import { Component, inject, signal } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent {
  loadingService = inject(LoadingService);
  apiResponse = this.loadingService.apiResponse;
  hasFetchApiReponse = signal<boolean>(false);

  onLoadApiResponse() {
    if (!this.hasFetchApiReponse()) this.hasFetchApiReponse.set(true);
    this.loadingService.loadApiResponse();
  }
}
