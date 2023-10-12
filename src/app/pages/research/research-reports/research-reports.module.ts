import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/componenets/shared/shared.module';
import { ResearchReportsComponent } from './research-reports.component';
import { ResearchReportsContentComponent } from './research-reports-content/research-reports-content.component';
import { RouterLink, RouterModule } from '@angular/router';
import { ResearchReportsContentRouteItemComponent } from './research-reports-content/research-reports-content-route-item/research-reports-content-route-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ResearchReportsComponent,
    ResearchReportsContentComponent,
    ResearchReportsContentRouteItemComponent,
  ],
  imports: [
    SharedModule,
    RouterLink,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [],
})
export class ResearchReportsModule {}
