import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  constructor() {
  }

  private _isLoading: WritableSignal<boolean> = signal(false);

  get isLoading(): Signal<boolean> {
    return this._isLoading;
  }

  set isLoading(isLoading: boolean) {
    this._isLoading.set(isLoading);
  }
}
