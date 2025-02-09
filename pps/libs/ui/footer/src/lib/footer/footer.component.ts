import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FooterNavComponent } from '../footer-nav/footer-nav.component';
import { FooterList } from '../models/models';

@Component({
  selector: 'pps-footer',
  imports: [CommonModule, FooterNavComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Input() logoUrl: string = '';

  navConfigs: FooterList[] = [
    {
      title: 'Продукти',
      items: [
        {
          name: 'Самоплепливи Етикети',
          routerLink: '',
        },
        {
          name: 'Хартиени чаши',
          routerLink: '',
        },
      ],
    },
    {
      title: 'сајт мапа',
      items: [
        {
          name: 'Дома',
          routerLink: '',
        },
        {
          name: 'За нас',
          routerLink: '',
        },

        {
          name: 'Контакт',
          routerLink: '',
        },
      ],
    },
    {
      title: 'поддршка',
      items: [
        {
          name: 'Ресурси',
          routerLink: '',
        },
        {
          name: 'Документација',
          routerLink: '',
        },
        {
          name: 'Полиси',
          routerLink: '',
        },
      ],
    },
  ];

  public emailPlaceholder = 'emailaddress@pps.com';
}
