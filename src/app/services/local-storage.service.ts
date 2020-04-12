import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getValue(key: string): string {
    return localStorage.getItem(key);
  }

  setValue(ket: string, value: string): void {
    localStorage.setItem(ket, value);
  }
}
