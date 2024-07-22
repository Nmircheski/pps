import { Component, ViewEncapsulation } from '@angular/core';
import { DetailsViewConfig } from '@pps/ui/details-view';

@Component({
  selector: 'pps-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AboutUsPageComponent {
  detailsViewConfigList: DetailsViewConfig[] = [
    {
      subTitle: 'За нас',
      mainTitle: 'Бизнис што се темели на цврсти фамилијарни темели',
      imageSrc: 'assets/card-cups-small.png',
      marginBottom: false,
      paragraphContent:
        'Нашиот посветен тим континуирано истражува и развива нови решенија за етикетирање за да биде во тек со постојано менувачките трендови НА пазарот и да му помогне НА вашиот бренд да остане пред конкуренцијата.',
    },
    {
      mainTitle:
        'Семеен бизнис со стремеж за создавање наследство на извонредност',
      subTitle: 'За нас',
      imageSrc: 'assets/industryExpandablePanel.png',
      buttonTitle: 'ПОВЕЌЕ ЗА НАС',
      marginBottom: true,
      paragraphContent:
        'Нашето сеопфатно портфолио ни овозможува да ги исполниме уникатните барања на секоја индустрија, обезбедувајќи приспособени решенија за етикети според вашите барања.',
    },
  ];

  endDetailsConfig: DetailsViewConfig = {
    imageSrc: 'assets/aboutUsImageDetails.png',
    subTitle: 'Технологии',
    mainTitle: 'Најсовремени машини и техники за етикети со највисок квалитет',
    paragraphContent:
      'Нашето сеопфатно портфолио ни овозможува да ги исполниме уникатните барања на секоја индустрија, обезбедувајќи приспособени решенија за етикети според вашите барања.',
    buttonTitle: 'ДОЗНАЈ ПОВЕЌЕ',
  };

  expandablePanelConfig: {
    subTitle: string;
    mainTitle: string;
  } = {
    mainTitle: 'Соработуваме и растеме во повеќе сектори',
    subTitle: 'индустрии',
  };
}
