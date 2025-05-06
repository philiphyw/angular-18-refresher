import { Component, inject } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
loadingService = inject(LoadingService)
apiResponse = this.loadingService.apiResponse;

loadApiResponse(){
  this.loadingService.loadApiResponse()
}

}
