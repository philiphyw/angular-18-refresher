import { Injectable, signal } from '@angular/core';

export interface FakeApiResponse {
  type: string;
  id: number;
  name?: string;
  text?: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  readonly #TIMEOUT_MILLISECONDS = 2000;
  #isLoading = signal<boolean>(false);
  isLoading = this.#isLoading.asReadonly();
  #fakeApiResponse = signal<FakeApiResponse[]>([]);
  apiResponse = this.#fakeApiResponse.asReadonly();

  constructor() {}

  startLoading() {
    this.#isLoading.set(true);
    setTimeout(() => {
      this.#isLoading.set(false);
    }, this.#TIMEOUT_MILLISECONDS);
  }

  loadApiResponse():void {
   this.#fakeApiResponse.set(
    [
      { type: 'user', id: 1, name: 'Rosa' },
      { type: 'user', id: 2, name: 'Max' },
      { type: 'message', id: 3, name: 'This is a great advice, thank you.' },
      { type: 'user', id: 4, name: 'Celia' },
      { type: 'message', id: 5, name: 'Got the fina score of my exam' },
    ]
   )
  }
}
