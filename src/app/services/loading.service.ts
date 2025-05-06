import { Injectable, signal } from '@angular/core';

export type FakeApiResponse = UserResponse | MessageResponse | ErrorResponse;

export interface UserResponse {
  type: 'user';
  id: number;
  name: string;
}

export interface MessageResponse {
  type: 'message';
  id: number;
  text: string;
}

export interface ErrorResponse {
  type: 'error';
  id: number;
  text: string;
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
      { type: 'message', id: 3, text: 'This is a great advice, thank you.' },
      { type: 'user', id: 4, name: 'Celia' },
      { type: 'message', id: 5, text: 'Got the final score of my exam' },
      { type: 'error', id: 6, text: 'Not sure what is going on' },
    ]
   )

   setTimeout(() => {
    this.#fakeApiResponse.update(preValue=>[...preValue, { type: 'message', id: 7, text: 'message sent after timeout' }])
   }, 1000)
  }
}
