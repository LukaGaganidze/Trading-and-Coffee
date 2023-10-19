import { Component, OnInit } from '@angular/core';

import { EBooksInterface, SCI_FI_BOOK_DATA } from './e-books-tems.data';

import { EBooksService } from './e-books.service';

@Component({
  selector: 'app-inverstments-e-books',
  templateUrl: './inverstments-e-books.component.html',
  styleUrls: ['./inverstments-e-books.component.scss'],
})
export class InverstmentsEBooksComponent implements OnInit {
  eBooksData: EBooksInterface[] = [];

  currentPage: number = 1;
  itemsPerPage: number = 6;

  startIndex: number = 0;

  totalItems: number = 0;
  totalPages: number = 0;

  constructor(private eBooksSer: EBooksService) {}

  ngOnInit(): void {
    this.eBooksSer.liveEBooksData.subscribe(
      (ebooks) => (this.eBooksData = ebooks)
    );

    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Enable smooth scrolling
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }
}
