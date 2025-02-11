import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsViewConfig } from '@pps/ui/details-view';

@Component({
    selector: 'pps-homepage',
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.scss',
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class HomepageComponent {
  routeToProducts(type: string) {
    console.log('product');
    this.router.navigate([`/products/${type}`]);
  }
  detailsViewConfig: DetailsViewConfig[] = [
    {
      layout: 'col-reverse',
      buttonTitle: 'Повеќе за нас',
      imageSrc: 'assets/aboutUsImageDetails.png',
      subTitle: 'За нас',
      mainTitle:
        'Семеен бизнис со стремеж за создавање наследство на извонредност',
      paragraphContent:
        'Нашето сеопфатно портфолио ни овозможува да ги исполниме уникатните барања на секоја индустрија,обезбедувајќи приспособени решенија за етикети според вашите барања.',
    },
    {
      layout: 'col-reverse',
      buttonTitle: 'дознај повеќе',
      imageSrc: 'assets/aboutUsImageDetails.png',
      subTitle: 'Технологии',
      mainTitle:
        'Најсовремени машини и техники за етикети со највисок квалитет',
      paragraphContent:
        'Нашиот посветен тим континуирано истражува и развива нови решенија за етикетирање за да биде во тек со постојано менувачките трендови НА пазарот и да му помогне НА вашиот бренд да остане пред конкуренцијата.',
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

  constructor(private readonly router: Router) {}
}
