import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '@pps/ui/button';

@Component({
  selector: 'pps-details-view',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './details-view.component.html',
  styleUrl: './details-view.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DetailsViewComponent {
  @Input() imageSrc: string = '';
  @Input() buttonTitle: string = '';
  @Input() imageSize: 'small' | 'large' = 'small';
  @Input() set textContent(text: string) {
    this.splitTextIntoParagraphs(text);
  }
  @Input() paragraphDelimiter: string = '<br>';
  @Input() mainTitle: string = '';
  @Input() subTitle: string = '';
  @Input() colReverse: boolean | null = null;
  @Input() marginBottom: boolean = false;

  paragraphs: string[] = [];

  private splitTextIntoParagraphs(text: string) {
    if (!text.length) {
      this.paragraphs = [];
    } else {
      this.paragraphs = text.split(this.paragraphDelimiter);
    }
  }
}
