import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  Optional,
  Output,
  Self,
  ViewChild,
} from '@angular/core';

import {
  AbstractControl,
  ControlValueAccessor,
  NgControl,
  ValidationErrors,
  Validator,
} from '@angular/forms';

import {
  MatFormField,
  MatFormFieldControl,
} from '@angular/material/form-field';

import * as intlTelInput from 'intl-tel-input';

import { Subject } from 'rxjs';

@Component({
  selector: 'app-tel-input',

  templateUrl: './tel-input.component.html',

  styleUrls: ['./tel-input.component.css'],

  providers: [
    {
      provide: MatFormFieldControl,

      useExisting: TelInputComponent,
    },
  ],
})
export class TelInputComponent
  implements
    AfterViewInit,
    OnDestroy,
    ControlValueAccessor,
    Validator,
    MatFormFieldControl<string>
{
  @ViewChild('telInput') telInput!: ElementRef;

  iti: intlTelInput.Plugin | undefined;

  touched: boolean = false;

  disabled = false;

  @Output() inputEvent: EventEmitter<string> = new EventEmitter<string>();

  @Output() countryChangeEvent: EventEmitter<intlTelInput.CountryData> =
    new EventEmitter<intlTelInput.CountryData>();

  value: string = '';

  stateChanges = new Subject<void>();

  static nextId = 0;

  @HostBinding() id = `app-tel-input-${TelInputComponent.nextId++}`;

  focused: boolean = false;

  controlType = 'app-tel-input';

  @Input('aria-describedby') userAriaDescribedBy: string = '';

  constructor(
    @Optional() @Self() public ngControl: NgControl,

    @Optional() public parentFormField: MatFormField
  ) {
    if (this.ngControl != null) {
      // Setting the value accessor directly (instead of using

      // the providers) to avoid running into a circular import.

      this.ngControl.valueAccessor = this;
    }
  }

  ngAfterViewInit(): void {
    this.iti = intlTelInput(this.telInput.nativeElement, {
      formatOnDisplay: true,

      separateDialCode: true,

      initialCountry: 'GE',

      showFlags: true,

      utilsScript: 'assets/js/intl/utils.js',
    } as any);

    this.iti.promise.then(() => this.setupField());
  }

  setupField() {
    // manually registering the validation function to overcome circular dependency for validator

    this.ngControl.control?.setValidators([this.validate.bind(this)]);

    this.ngControl.control?.updateValueAndValidity();

    this.replaceSelecArrowDesign();

    this.iti?.setNumber(this.value);

    this.updateValue();
  }

  replaceSelecArrowDesign() {
    const arrowElement = document.querySelector(
      '.iti .iti__flag-container .iti__selected-flag .iti__arrow'
    );

    if (arrowElement) {
      const element = document.createElement('span');

      element.setAttribute('class', 'iti_custom_arrow');

      element.innerHTML = '<i class="material-icons">keyboard_arrow_down</i>';

      arrowElement.replaceWith(element);
    }
  }

  onInput() {
    this.updateValue();

    this.inputEvent.emit(this.iti?.getNumber());
  }

  onFocus() {
    if (!this.focused) {
      this.focused = true;

      this.stateChanges.next();
    }
  }

  onFocusOut(event: FocusEvent) {
    if (!this.telInput.nativeElement.contains(event.relatedTarget as Element)) {
      this.focused = false;

      this.markAsTouched();

      this.stateChanges.next();
    }
  }

  onCountryChange() {
    this.updateValue();

    this.countryChangeEvent.emit(this.iti?.getSelectedCountryData());
  }

  updateValue() {
    if (this.iti) {
      this.iti.setNumber(this.iti.getNumber());

      this.value = this.iti.getNumber();

      this.onChange(this.iti.getNumber());

      this.stateChanges.next();
    }
  }

  writeValue(phnNumber: string) {
    this.value = phnNumber;

    if (this.iti) {
      this.iti.setNumber(phnNumber);
    }
  }

  onChange = (phnNumber: string) => {};

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  onTouched = () => {};

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();

      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;

    this.stateChanges.next();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.iti) {
      if (!this.iti.isValidNumber()) {
        return {
          invalidNumber: {
            reason: this.iti?.getValidationError(),
          },
        };
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  @Input()
  get placeholder() {
    return this._placeholder;
  }

  set placeholder(plh) {
    this._placeholder = plh;

    this.stateChanges.next();
  }

  private _placeholder: string = '';

  get empty() {
    let n = '';

    if (this.iti) {
      n = this.iti.getNumber();
    }

    return n.length === 0;
  }

  @HostBinding('class.floating')
  get shouldLabelFloat() {
    // return this.focused || !this.empty;

    return true; // Label will always float as placeholder is dynamically shown by intl-tel-input based on country code
  }

  @Input()
  get required(): boolean {
    return this._required;
  }

  set required(req: BooleanInput) {
    this._required = coerceBooleanProperty(req);

    this.stateChanges.next();
  }

  private _required = false;

  get errorState(): boolean {
    return !this.iti?.isValidNumber() && this.touched;
  }

  setDescribedByIds(ids: string[]) {
    const controlElement = this.telInput?.nativeElement.querySelector(
      '.app-tel-input-container'
    );

    controlElement?.setAttribute('aria-describedby', ids.join(' '));
  }

  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() != 'input') {
      this.telInput.nativeElement.focus();
    }
  }

  ngOnDestroy(): void {
    this.iti?.destroy();

    this.stateChanges.complete();
  }
}
