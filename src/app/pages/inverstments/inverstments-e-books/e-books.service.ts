import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { EBooksInterface, SCI_FI_BOOK_DATA } from './e-books-tems.data';

@Injectable({
  providedIn: 'root',
})
export class EBooksService {
  originalEBookData: EBooksInterface[] = SCI_FI_BOOK_DATA;
  latestItem = new BehaviorSubject<EBooksInterface | null>(null);

  liveEBooksData = new BehaviorSubject<EBooksInterface[]>(
    this.originalEBookData
  );

  reactToFilterEbooks(option: string) {
    if (option === 'all') {
      this.liveEBooksData.next(this.originalEBookData);
    } else {
      console.log(option);
      const filteredByYear = this.originalEBookData.filter(
        (el) => +el.year === +option
      );
      this.liveEBooksData.next(filteredByYear);
    }
  }

  reactToGetExactItem(id: number) {
    const selectedItem = this.originalEBookData.filter(
      (item) => +item.id === +id
    );
    localStorage.setItem('eBook', JSON.stringify(selectedItem[0]));
  }
}
