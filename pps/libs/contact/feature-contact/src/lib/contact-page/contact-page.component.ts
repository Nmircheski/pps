import { Component } from '@angular/core';
import { ContactItem } from '../models/interfaces';

@Component({
  selector: 'pps-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss',
})
export class ContactPageComponent {
  contactItems: ContactItem[] = [
    {
      label: 'локација',
      type: 'link',
      value: 'Naroden Front 7, Skopje 1000',
      linkUrl: '',
    },
    {
      label: 'емаил',
      type: 'email',
      value: 'contact@pps.com',
    },
    {
      label: 'телефон',
      type: 'phone',
      value: '+389 71 234 567',
    },
  ];
}
