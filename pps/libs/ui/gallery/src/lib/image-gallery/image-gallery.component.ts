import { Component, ElementRef, ViewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { Image } from '../models/models';

@Component({
    selector: 'pps-image-gallery',
    templateUrl: './image-gallery.component.html',
    styleUrl: './image-gallery.component.scss',
    standalone: false
})
export class ImageGalleryComponent {
  protected images: Image[] = [];

  ngOnInit() {
    this.images = [
      {
        src: 'assets/gallery/image2.png',
      },
      {
        src: 'assets/gallery/image3.png',
      },
      {
        src: 'assets/gallery/image4.png',
      },
      {
        src: 'assets/gallery/image5.png',
      },
    ];
  }

  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;
  @ViewChild('swiperThumbs') swiperThumbs!: ElementRef<SwiperContainer>;

  index = 0;

  // Swiper
  public readonly swiperConfig: SwiperOptions = {
    spaceBetween: 10,
    slidesPerView: 3,
  };

  swiperThumbsConfig: SwiperOptions = {};

  ngAfterViewInit() {
    this.swiper.nativeElement.swiper.activeIndex = this.index;
    this.swiperThumbs.nativeElement.swiper.activeIndex = this.index;
  }

  slideChange(swiper: any) {
    this.index = swiper.detail[0].activeIndex;
  }
}
