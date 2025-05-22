import { Component, inject, signal } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
import { ResponseFilterComponent } from "./response-filter/response-filter.component";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [ResponseFilterComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent {
  loadingService = inject(LoadingService);
  apiResponse = this.loadingService.apiResponse;
  hasFetchApiReponse = signal<boolean>(false);
  responseFilterText = signal<string>('');

  onLoadApiResponse() {
    if (!this.hasFetchApiReponse()) this.hasFetchApiReponse.set(true);
    this.loadingService.loadApiResponse();
  }
}
