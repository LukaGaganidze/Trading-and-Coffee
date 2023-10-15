import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EBookGuardServiceService {
  private eBookPage = false;
  constructor() {
    if (localStorage.getItem('eBook')) {
      this.eBookPage = true;
    } else {
      this.eBookPage = false;
    }
  }

  eBookPageValid() {
    this.eBookPage = true;
  }
  eBookPageInvalid() {
    this.eBookPage = false;
  }
  eBookAcessState(): boolean {
    return this.eBookPage;
  }
}
