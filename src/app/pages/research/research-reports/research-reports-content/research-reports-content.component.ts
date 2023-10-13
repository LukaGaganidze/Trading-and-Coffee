import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ReportsItemServiceService } from './research-reports-content-route-item/reports-item-service.service';

import { ResearcheServiceService } from '../../researche-service.service';

@Component({
  selector: 'app-research-reports-content',
  templateUrl: './research-reports-content.component.html',
  styleUrls: ['./research-reports-content.component.scss'],
})
export class ResearchReportsContentComponent implements OnInit {
  // month is disabled if years is all
  disabledMonthFilter = true;

  // initial value of month (restarts everytime when years is changed with two way binding)
  selectYear = 'all';
  selectedMonth = 'all';

  // input
  inputForm!: FormGroup;

  constructor(
    private reportItemSer: ReportsItemServiceService,
    private resSer: ResearcheServiceService
  ) {}

  ngOnInit(): void {
    this.inputForm = new FormGroup({
      searchInput: new FormControl(null, [
        Validators.required,
        Validators.min(3),
      ]),
    });

    this.resSer.backToAll.subscribe((val: string) => {
      this.selectYear = val;
      this.selectedMonth = 'all';
      this.disabledMonthFilter = true;
    });
  }
  onSubmitInputForm() {
    if (!this.inputForm.valid) return;

    if (this.inputForm.valid) {
      this.reportItemSer.reactToInoutSubmit(
        this.inputForm.get('searchInput')?.value
      );
    }

    this.inputForm.reset();
  }
  onFilterByYear(e: Event) {
    if ((e.target as HTMLSelectElement).value == 'all') {
      this.disabledMonthFilter = true;
    }
    if ((e.target as HTMLSelectElement).value !== 'all') {
      this.disabledMonthFilter = false;
    }

    this.reportItemSer.reactToOnFilterByYearChaneg(
      (e.target as HTMLSelectElement).value
    );

    this.selectedMonth = 'all';
  }
  onFilterByMonth(e: Event) {
    this.reportItemSer.reactToOnFilterByMonthChaneg(
      (e.target as HTMLSelectElement).value
    );
  }
}
