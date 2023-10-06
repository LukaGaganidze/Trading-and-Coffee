import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isSticky = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    // Check the scroll position
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    if (scrollY >= 23) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }
}
