import { Component, ElementRef, Renderer2, viewChild } from '@angular/core';
import { ContactItem } from '../models/interfaces';

@Component({
    selector: 'pps-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrl: './contact-page.component.scss',
    standalone: false
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

  readonly formContainer = viewChild('formContainer', { read: ElementRef });
  readonly imgContainer = viewChild('imgContainer', { read: ElementRef });
  readonly container = viewChild.required('container', { read: ElementRef });

  private resizeObserver: ResizeObserver | undefined;

  constructor(private readonly renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const resizeObserver = new ResizeObserver(this.handleItemsWrapping);

    resizeObserver.observe(this.container().nativeElement);
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
  }

  private handleItemsWrapping = (): void => {
    //TODO this should be propagated through observable and distinctUntilChanged.. to reduce number of calls
    const formElement = this.formContainer()?.nativeElement;
    const imageElement = this.imgContainer()?.nativeElement;

    if (
      formElement &&
      imageElement &&
      this.areItemsWrapped(formElement, imageElement)
    ) {
      console.log('wrapped');
      this.renderer.removeClass(imageElement, 'rounded-right');
      this.renderer.addClass(imageElement, 'rounded-top');
      this.renderer.setAttribute(
        formElement,
        'class',
        'form-container rounded-bottom px-responsive',
      );
    } else {
      console.log('not wrapped');
      this.renderer.removeClass(imageElement, 'rounded-top');
      this.renderer.addClass(imageElement, 'rounded-right');
      this.renderer.setAttribute(
        formElement,
        'class',
        'form-container rounded-left pl-responsive',
      );
    }
  };

  private areItemsWrapped = (
    formElement: HTMLElement,
    imageElement: HTMLElement,
  ): boolean => {
    if (imageElement.offsetTop !== formElement.offsetTop) {
      return true;
    }

    return false;
  };
}
