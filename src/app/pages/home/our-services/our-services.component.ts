import { Component } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss'],
})
export class OurServicesComponent {
  stateImg1 = false;
  stateImg2 = false;
  stateImg3 = false;

  onMouseenterImg1() {
    this.stateImg1 = true;
  }
  onMouseLeaveImg1() {
    this.stateImg1 = false;
  }
  onMouseenterImg2() {
    this.stateImg2 = true;
  }
  onMouseLeaveImg2() {
    this.stateImg2 = false;
  }
  onMouseenterImg3() {
    this.stateImg3 = true;
  }
  onMouseLeaveImg3() {
    this.stateImg3 = false;
  }
}
