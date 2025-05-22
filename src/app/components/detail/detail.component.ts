import { Component, computed, inject, signal } from '@angular/core';
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
  filteredApiResponse = computed(()=>{
    const filterText = this.responseFilterText();
    if (!filterText) return this.apiResponse();
    return this.apiResponse().filter((item) =>{
      const itemText = item.type === 'user' ? item.name : item.text;
      return itemText.toLowerCase().includes(filterText.toLowerCase());
    }
    );
  })

  onLoadApiResponse() {
    if (!this.hasFetchApiReponse()) this.hasFetchApiReponse.set(true);
    this.loadingService.loadApiResponse();
  }
}
