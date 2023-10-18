import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { InverstItem } from '../items-content';
import 'intersection-observer';

@Component({
  selector: 'app-inverstment-content-item',
  templateUrl: './inverstment-content-item.component.html',
  styleUrls: ['./inverstment-content-item.component.scss'],
})
export class InverstmentContentItemComponent {
  @Input() data!: InverstItem;

  private observer: IntersectionObserver | undefined;
  isElementVisible = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin around the root
      threshold: 0.2, // Trigger when 50% of the element is in the viewport
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
