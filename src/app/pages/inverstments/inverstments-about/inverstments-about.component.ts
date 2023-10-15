import { Component, OnInit } from '@angular/core';

import { INVERSTMETN_ITEMS, InverstItem } from './items-content';

@Component({
  selector: 'app-inverstments-about',
  templateUrl: './inverstments-about.component.html',
  styleUrls: ['./inverstments-about.component.scss'],
})
export class InverstmentsAboutComponent implements OnInit {
  itemsContent: InverstItem[] = [];

  ngOnInit(): void {
    this.itemsContent = INVERSTMETN_ITEMS;
  }
}
