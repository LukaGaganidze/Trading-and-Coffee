import { AbstractControl, ValidationErrors } from '@angular/forms';

export function atLeastOneCheckboxCheckedValidator(
  control: AbstractControl
): ValidationErrors | null {
  const checkboxFields = [
    'checkResearch',
    'macroeconomics',
    'sectorresearch',
    'financialmarket',
    'weeklyupdate',
    'brokerage',
  ];

  const isChecked = checkboxFields.some((field) => control.get(field)?.value);

  return isChecked ? null : { atLeastOneCheckboxChecked: true };
}
