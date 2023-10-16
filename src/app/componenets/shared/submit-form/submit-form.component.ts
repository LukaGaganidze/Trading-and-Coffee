import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubmitFormServiceService } from './submit-form-service.service';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss'],
})
export class SubmitFormComponent implements OnInit, OnDestroy {
  formActive: boolean = false;

  // subsriptions
  formActiveSubscription!: Subscription;
  constructor(private formSer: SubmitFormServiceService) {}

  ngOnInit() {
    this.formSer.formState.subscribe((state) => {
      this.formActive = state;
    });
  }

  closeForm() {
    this.formSer.toFormInactiveState();
  }

  ngOnDestroy(): void {
    this.formActiveSubscription.unsubscribe();
  }
}
