import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
readonly #TIMEOUT_MILLISECONDS = 2000
#isLoading = signal<boolean>(false)
isLoading = this.#isLoading.asReadonly()

  constructor() {

   }

   startLoading(){
    this.#isLoading.set(true)
    setTimeout(()=>{
      this.#isLoading.set(false)
    }, this.#TIMEOUT_MILLISECONDS)
   }
}
