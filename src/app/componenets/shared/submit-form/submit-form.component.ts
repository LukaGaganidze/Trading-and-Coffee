import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SubmitFormServiceService } from './submit-form-service.service';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss'],
})
export class SubmitFormComponent implements OnInit, OnDestroy {
  formActive: boolean = false;

  submitionForm!: FormGroup;

  // subsriptions
  formActiveSubscription!: Subscription;
  constructor(private formSer: SubmitFormServiceService) {}

  ngOnInit() {
    this.formSer.formState.subscribe((state) => {
      this.formActive = state;
    });

    this.submitionForm = new FormGroup({
      firstname: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
      ]),
      lastname: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      industry: new FormControl(null, [Validators.required]),
      country: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      company: new FormControl(null, [Validators.required]),
      position: new FormControl(null, [Validators.required]),
      phonenumber: new FormControl(null, [Validators.required]),

      // Checkboxes
      checkboxes: new FormArray(
        [
          new FormControl(false), // checkResearch
          new FormControl(false), // macroeconomics
          new FormControl(false), // sectorresearch
          new FormControl(false), // financialmarket
          new FormControl(false), // weeklyupdate
          new FormControl(false), // brokerage
        ],
        this.atLeastOneCheckedValidator
      ),
    });
  }

  atLeastOneCheckedValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    if (control instanceof FormArray) {
      const isChecked = control.controls.some((checkbox) => checkbox.value);
      return isChecked ? null : { atLeastOneChecked: true };
    }
    return null;
  }

  onSubmition() {
    console.log(this.submitionForm);
    // this.submitionForm.reset();
  }

  closeForm() {
    this.formSer.toFormInactiveState();
  }

  ngOnDestroy(): void {
    this.formActiveSubscription.unsubscribe();
  }
}
