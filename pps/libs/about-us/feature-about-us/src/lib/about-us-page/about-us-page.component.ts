import { Component } from '@angular/core';

@Component({
  selector: 'pps-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.scss',
})
export class AboutUsPageComponent {
  detailsViewConfig: {
    subTitle: string;
    mainTitle: string;
    paragraphContent: string;
  } = {
    subTitle: 'За нас',
    mainTitle: 'Бизнис што се темели на цврсти фамилијарни темели',
    paragraphContent:
      'Нашиот посветен тим континуирано истражува и развива нови решенија за етикетирање за да биде во тек со постојано менувачките трендови НА пазарот и да му помогне НА вашиот бренд да остане пред конкуренцијата.',
  };
  expandablePanelConfig: {
    subTitle: string;
    mainTitle: string;
  } = {
    mainTitle: 'Соработуваме и растеме во повеќе сектори',
    subTitle: 'индустрии',
  };
}
