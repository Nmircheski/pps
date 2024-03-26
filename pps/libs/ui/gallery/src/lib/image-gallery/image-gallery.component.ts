import { Component, ElementRef, ViewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'pps-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.scss',
})
export class ImageGalleryComponent {
  protected images: { src: string }[] = [];

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
  swiperConfig: SwiperOptions = {
    spaceBetween: 20,
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
