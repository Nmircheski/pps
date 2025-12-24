import { NgOptimizedImage } from '@angular/common';
import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  input,
  viewChild,
} from '@angular/core';
import { register, SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from '../directives/swiper.directive';
import { Image } from '../models/models';

register();

@Component({
  selector: 'pps-image-gallery',
  imports: [SwiperDirective, NgOptimizedImage],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ImageGalleryComponent implements AfterViewInit {
  images = input<Image[]>([]);

  readonly swiper = viewChild<ElementRef<SwiperContainer>>('swiper');
  readonly swiperThumbs =
    viewChild<ElementRef<SwiperContainer>>('swiperThumbs');

  index = 0;

  // Swiper
  public readonly swiperConfig: SwiperOptions = {
    spaceBetween: 10,
    slidesPerView: 3,
  };

  swiperThumbsConfig: SwiperOptions = {};

  ngAfterViewInit() {
    const swiper = this.swiper()?.nativeElement.swiper;

    if (swiper) {
      swiper.activeIndex = this.index;
    }

    const thumbsSwiper = this.swiperThumbs()?.nativeElement.swiper;

    if (thumbsSwiper) {
      thumbsSwiper.activeIndex = this.index;
    }
  }

  slideChange(swiper: any) {
    this.index = swiper.detail[0].activeIndex;
  }
}
