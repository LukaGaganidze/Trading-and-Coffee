import { Component, Input } from '@angular/core';
import { EBooksInterface } from '../e-books-tems.data';

import { Router, ActivatedRoute } from '@angular/router';
import { EBooksService } from '../e-books.service';

import { EBookGuardServiceService } from '../e-book-page/e-book-guard-service.service';

@Component({
  selector: 'app-e-book-item',
  templateUrl: './e-book-item.component.html',
  styleUrls: ['./e-book-item.component.scss'],
})
export class EBookItemComponent {
  @Input() eBookData!: EBooksInterface;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private eBookSer: EBooksService,
    private eBookGuardSer: EBookGuardServiceService
  ) {}

  navigaetToItem(id: number) {
    this.eBookGuardSer.eBookPageValid();
    this.eBookSer.reactToGetExactItem(id);
    this.router.navigate([this.eBookData.title], { relativeTo: this.route });
  }
}
