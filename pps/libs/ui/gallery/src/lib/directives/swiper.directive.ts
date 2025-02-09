import { AfterViewInit, Directive, ElementRef, input } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
@Directive({
    selector: '[ppsSwiper]',
    standalone: false
})
export class SwiperDirective implements AfterViewInit {
  readonly config = input<SwiperOptions>();

  constructor(private el: ElementRef<SwiperContainer>) {}

  ngAfterViewInit(): void {
    Object.assign(this.el.nativeElement, this.config());

    this.el.nativeElement.initialize();
  }
}
