import { Component, Input, ElementRef } from '@angular/core';

import { InverstmentLandigPage } from '../../inverstment-banking-data';

@Component({
  selector: 'app-inverstment-banking-landing-item',
  templateUrl: './inverstment-banking-landing-item.component.html',
  styleUrls: ['./inverstment-banking-landing-item.component.scss'],
})
export class InverstmentBankingLandingItemComponent {
  @Input() data!: InverstmentLandigPage;

  private observer: IntersectionObserver | undefined;
  isElementVisible = false;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin around the root
      threshold: 0.5, // Trigger when 50% of the element is in the viewport
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.isElementVisible = true;

          this.observer?.unobserve(entry.target);
        }
      });
    }, options); // Here's where you pass the 'options' object
    this.observer.observe(this.elementRef.nativeElement);
  }
}
