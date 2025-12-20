import { Component, ElementRef, input, viewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { Image } from '../models/models';

@Component({
  selector: 'pps-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.scss',
  standalone: false,
})
export class ImageGalleryComponent {
  images = input<Image[]>([]);

  readonly swiper = viewChild.required<ElementRef<SwiperContainer>>('swiper');
  readonly swiperThumbs =
    viewChild.required<ElementRef<SwiperContainer>>('swiperThumbs');

  index = 0;

  // Swiper
  public readonly swiperConfig: SwiperOptions = {
    spaceBetween: 10,
    slidesPerView: 3,
  };

  swiperThumbsConfig: SwiperOptions = {};

  ngAfterViewInit() {
    this.swiper().nativeElement.swiper.activeIndex = this.index;
    this.swiperThumbs().nativeElement.swiper.activeIndex = this.index;
  }

  slideChange(swiper: any) {
    this.index = swiper.detail[0].activeIndex;
  }
}
