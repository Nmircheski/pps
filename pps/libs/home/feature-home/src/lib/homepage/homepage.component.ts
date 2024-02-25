import { Component } from '@angular/core';

@Component({
  selector: 'pps-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  detailsViewConfig: {
    buttonTitle: string;
    subTitle: string;
    mainTitle: string;
    paragraphContent: string;
  } = {
    buttonTitle: 'Повеќе за нас',
    subTitle: 'За нас',
    mainTitle:
      'Семеен бизнис со стремеж за создавање наследство на извонредност',
    paragraphContent:
      'Нашето сеопфатно портфолио ни овозможува да ги исполниме уникатните барања на секоја индустрија,обезбедувајќи приспособени решенија за етикети според вашите барања.',
  };
  expandablePanelConfig: {
    subTitle: string;
    mainTitle: string;
  } = {
    mainTitle: 'Соработуваме и растеме во повеќе сектори',
    subTitle: 'индустрии',
  };
}
