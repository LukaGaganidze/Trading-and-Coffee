import { NgModule } from '@angular/core';

import { ResearchRouterModule } from './research-routing.module';

import { ResearchLandingModule } from './research-landing/research-landing.module';
import { ResearchReportsModule } from './research-reports/research-reports.module';
import { SharedModule } from 'src/app/componenets/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    ResearchRouterModule,
    ResearchLandingModule,
    ResearchReportsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [],
})
export class ResearchPageModule {}
