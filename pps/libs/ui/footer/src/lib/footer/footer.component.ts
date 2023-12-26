import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '@pps/ui/button';
import { InputComponent } from '@pps/ui/input';
import { FooterNavComponent } from '../footer-nav/footer-nav.component';
import { FooterList } from '../models/models';

@Component({
  selector: 'pps-footer',
  standalone: true,
  imports: [CommonModule, FooterNavComponent, InputComponent, ButtonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Input() logoUrl: string = '';

  navConfigs: FooterList[] = [
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
          name: 'Продукти',
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

  public emailPlaceholder = 'email@address.com';
}
