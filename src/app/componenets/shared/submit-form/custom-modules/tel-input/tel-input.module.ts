import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { TelInputComponent } from './tel-input.component';

@NgModule({
  declarations: [TelInputComponent],

  imports: [CommonModule],

  exports: [TelInputComponent],
})
export class TelInputModule {}
