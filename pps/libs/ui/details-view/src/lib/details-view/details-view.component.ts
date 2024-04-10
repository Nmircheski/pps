import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '@pps/ui/button';

@Component({
  selector: 'pps-details-view',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './details-view.component.html',
  styleUrl: './details-view.component.scss',
})
export class DetailsViewComponent {
  @Input() imageSrc: string = '';
  @Input() buttonTitle: string = '';
  @Input() paragraphContent: string = '';
  @Input() mainTitle: string = '';
  @Input() subTitle: string = '';
  @Input() colReverse: boolean | null = null;
}
