import { Component, Input } from '@angular/core';
import { SliderItem } from '../types';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent {
  @Input() slider: SliderItem[] = [];
  currentSlideIndex: number = 0;
  currentSlide!: SliderItem;

  ngOnInit() {
    this.currentSlide = this.slider[0];
  }

  toLeft() {
    const sliderLangth = this.slider.length;
    console.log(sliderLangth);

    if (this.currentSlideIndex === 0) {
      this.currentSlideIndex = sliderLangth - 1;
    } else {
      this.currentSlideIndex--;
    }
    this.currentSlide = this.slider[this.currentSlideIndex];
  }

  toRight() {
    const sliderLangth = this.slider.length;

    if (this.currentSlideIndex === sliderLangth - 1) {
      this.currentSlideIndex = 0;
    } else {
      this.currentSlideIndex++;
    }
    this.currentSlide = this.slider[this.currentSlideIndex];
  }

  getCurrentSlide() {
    return `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),url(../../../../../assets/home/hero/slider-img-${this.currentSlideIndex}.jpg)`;
  }
}
