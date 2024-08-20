import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '@pps/ui/button';
import { DetailsLayout, DetailsViewConfig } from '../models/models';

@Component({
  selector: 'pps-details-view',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './details-view.component.html',
  styleUrl: './details-view.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DetailsViewComponent implements DetailsViewConfig {
  @Input() imageSrc: string = '';
  @Input() buttonTitle: string = '';
  @Input() imageSize: 'small' | 'large' = 'small';
  @Input() set paragraphContent(text: string) {
    this.splitTextIntoParagraphs(text);
  }
  @Input() paragraphDelimiter: string = '<br>';
  @Input() mainTitle: string = '';
  @Input() subTitle: string = '';
  @Input() colReverse: boolean | null = null;
  @Input() marginBottom: boolean = false;
  @Input() set layout(position: DetailsLayout) {
    this._layout = position;
    this.setLayoutClasses(position);
  }
  protected _layout: DetailsLayout = 'regular';

  paragraphs: string[] = [];

  imgClassList: string[] = [];
  headerClassList: string[] = [];
  textClassList: string[] = [];

  ngOnInit() {
    this.setLayoutClasses(this._layout);
  }

  private splitTextIntoParagraphs(text: string) {
    if (!text.length) {
      this.paragraphs = [];
    } else {
      this.paragraphs = text.split(this.paragraphDelimiter);
    }
  }

  private setLayoutClasses(position: DetailsLayout) {
    switch (position) {
      case 'regular': {
        this.imgClassList = [
          'sm:col-start-1',
          'sm:col-end-2',
          'sm:row-start-1',
          'sm:row-end-3',
        ];
        this.headerClassList = [
          'sm:col-start-2',
          'sm:col-end-3',
          'sm:row-start-1',
          'sm:row-end-2',
        ];
        this.textClassList = [
          'col-start-2',
          'sm:col-end-3',
          'sm:row-start-2',
          'sm:row-end-3',
        ];
        break;
      }
      case 'col-reverse': {
        this.imgClassList = [
          'sm:sm:col-start-2',
          'sm:col-end-3',
          'sm:row-start-1',
          'sm:row-end-3',
        ];
        this.headerClassList = [
          'sm:sm:col-start-1',
          'sm:col-end-2',
          'sm:row-start-1',
          ' sm:row-end-2',
        ];
        this.textClassList = [
          'sm:col-start-1',
          'sm:col-end-2',
          'sm:row-start-2',
          ' sm:row-end-3',
        ];
        break;
      }
      case 'row-reverse': {
        this.imgClassList = [
          'sm:col-start-1',
          'sm:col-end-3',
          'sm:row-start-2',
          'sm:row-end-3',
        ];
        this.headerClassList = [
          'sm:col-start-1',
          'sm:col-end-1',
          'sm:row-start-1',
          'sm:row-end-2',
        ];
        this.textClassList = [
          'sm:col-start-2',
          'sm:col-end-3',
          'sm:row-start-1',
          'sm:row-end-2',
        ];
        break;
      }
    }
  }
}
