import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { SwiperDirective } from './directives/swiper.directive';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';

register();

@NgModule({
  imports: [CommonModule],
  declarations: [ImageGalleryComponent, SwiperDirective],
  exports: [ImageGalleryComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ImageGalleryModule {}
