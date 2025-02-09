import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, computed, input } from '@angular/core';
import { ButtonComponent } from '@pps/ui/button';
import { DetailsLayout } from '../models/models';

@Component({
  selector: 'pps-details-view',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './details-view.component.html',
  styleUrl: './details-view.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DetailsViewComponent {
  readonly imageSrc = input<string>('');
  readonly buttonTitle = input<string>('');
  imageSize = input<'small' | 'large'>('small');
  readonly paragraphContent = input<string>('');

  readonly paragraphs = computed(() => {
    if (!this.paragraphContent().length) {
      return [];
    } else {
      return this.paragraphContent().split(this.paragraphDelimiter());
    }
  });

  readonly paragraphDelimiter = input<string>('<br>');
  readonly mainTitle = input<string>('');
  readonly subTitle = input<string>('');
  readonly colReverse = input<boolean | null>(null);
  readonly marginBottom = input<boolean>(false);

  readonly layout = input<DetailsLayout>('regular');

  readonly imgClassList = computed(() => {
    switch (this.layout()) {
      case 'regular': {
        return [
          'sm:col-start-1',
          'sm:col-end-2',
          'sm:row-start-1',
          'sm:row-end-3',
        ];
      }
      case 'col-reverse': {
        return [
          'sm:sm:col-start-2',
          'sm:col-end-3',
          'sm:row-start-1',
          'sm:row-end-3',
        ];
      }
      case 'row-reverse': {
        return [
          'sm:col-start-1',
          'sm:col-end-3',
          'sm:row-start-2',
          'sm:row-end-3',
        ];
      }
    }
  });

  readonly headerClassList = computed(() => {
    switch (this.layout()) {
      case 'regular': {
        return [
          'sm:col-start-2',
          'sm:col-end-3',
          'sm:row-start-1',
          'sm:row-end-2',
        ];
      }
      case 'col-reverse': {
        return [
          'sm:sm:col-start-1',
          'sm:col-end-2',
          'sm:row-start-1',
          ' sm:row-end-2',
        ];
      }
      case 'row-reverse': {
        return [
          'sm:col-start-1',
          'sm:col-end-1',
          'sm:row-start-1',
          'sm:row-end-2',
        ];
      }
    }
  });

  readonly textClassList = computed(() => {
    switch (this.layout()) {
      case 'regular': {
        return [
          'col-start-2',
          'sm:col-end-3',
          'sm:row-start-2',
          'sm:row-end-3',
        ];
      }
      case 'col-reverse': {
        return [
          'sm:col-start-1',
          'sm:col-end-2',
          'sm:row-start-2',
          ' sm:row-end-3',
        ];
      }
      case 'row-reverse': {
        return [
          'sm:col-start-2',
          'sm:col-end-3',
          'sm:row-start-1',
          'sm:row-end-2',
        ];
      }
    }
  });
}
