import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination-shared-componenet',
  templateUrl: './pagination-shared-componenet.component.html',
  styleUrls: ['./pagination-shared-componenet.component.scss'],
})
export class PaginationSharedComponenetComponent {
  @Input() currentPage: number = 1;
  @Input() itemsPerPage: number = 12;
  @Input() totalItems: number = 0;
  @Input() itemsContainer: HTMLDivElement | undefined;

  @Output() pageChange = new EventEmitter<number>();

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  //  go to page on click
  gotoPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.pageChange.emit(page);
    }

    // scroll on items on click
    if (this.itemsContainer) {
      const offset = 150;
      const scrollPosition =
        this.itemsContainer.getBoundingClientRect().top +
        window.scrollY -
        offset;
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }
  }
}
