import { Component, ViewEncapsulation } from '@angular/core';
import { DetailsViewConfig } from '@pps/ui/details-view';

@Component({
  selector: 'pps-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomepageComponent {
  detailsViewConfig: DetailsViewConfig[] = [
    {
      buttonTitle: 'Повеќе за нас',
      imageSrc: 'assets/aboutUsImageDetails.png',
      subTitle: 'За нас',
      mainTitle:
        'Семеен бизнис со стремеж за создавање наследство на извонредност',
      paragraphContent:
        'Нашето сеопфатно портфолио ни овозможува да ги исполниме уникатните барања на секоја индустрија,обезбедувајќи приспособени решенија за етикети според вашите барања.',
    },
    {
      buttonTitle: 'дознај повеќе',
      imageSrc: 'assets/aboutUsImageDetails.png',
      subTitle: 'Технологии',
      mainTitle:
        'Најсовремени машини и техники за етикети со највисок квалитет',
      paragraphContent:
        'Нашето сеопфатно портфолио ни овозможува да ги исполниме уникатните барања на секоја индустрија,обезбедувајќи приспособени решенија за етикети според вашите барања.',
    },
  ];
  expandablePanelConfig: {
    subTitle: string;
    mainTitle: string;
  } = {
    mainTitle: 'Соработуваме и растеме во повеќе сектори',
    subTitle: 'индустрии',
  };

  // TODO create a card-list component with it's own styling
}
