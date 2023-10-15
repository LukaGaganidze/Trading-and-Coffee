import { Component, OnDestroy, OnInit } from '@angular/core';
import { EBooksInterface } from '../e-books-tems.data';

import { EBooksService } from '../e-books.service';
import { EBookGuardServiceService } from './e-book-guard-service.service';

@Component({
  selector: 'app-e-book-page',
  templateUrl: './e-book-page.component.html',
  styleUrls: ['./e-book-page.component.scss'],
})
export class EBookPageComponent implements OnInit, OnDestroy {
  eBookData!: EBooksInterface;

  // subscription

  constructor(private eBooksGuardSer: EBookGuardServiceService) {}

  ngOnInit(): void {
    // Retrieve the JSON string from localStorage
    const storedObjectString = localStorage.getItem('eBook');

    if (storedObjectString !== null) {
      const retrievedObject = JSON.parse(storedObjectString);
      this.eBookData = retrievedObject;
    } else {
      this.eBooksGuardSer.eBookPageInvalid();
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  ngOnDestroy() {}
}
