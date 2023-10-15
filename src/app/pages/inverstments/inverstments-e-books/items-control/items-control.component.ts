import { Component } from '@angular/core';

import { EBooksService } from '../e-books.service';

@Component({
  selector: 'app-items-control',
  templateUrl: './items-control.component.html',
  styleUrls: ['./items-control.component.scss'],
})
export class ItemsControlComponent {
  constructor(private eBookSer: EBooksService) {}

  filterEbooks(e: Event) {
    this.eBookSer.reactToFilterEbooks((e.target as HTMLSelectElement).value);
  }
}
