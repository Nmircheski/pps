import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  input,
  QueryList,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'pps-cards-container',
  imports: [CommonModule],
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CardsContainerComponent {
  mainTitle = input('');
  subTitle = input('');

  public cardsTemplates: TemplateRef<any>[] = [];

  @ContentChildren(CardComponent) set cardList(
    cards: QueryList<CardComponent> | undefined,
  ) {
    this._cardList = cards;
  }

  _cardList: QueryList<CardComponent> | undefined;

  constructor(private readonly changeDetecorRef: ChangeDetectorRef) {}

  public ngAfterViewInit() {
    this.cardsTemplates =
      this._cardList
        ?.toArray()
        .filter((c) => c.templateRef())
        .map((c) => c.templateRef()!) ?? [];

    this.changeDetecorRef.detectChanges();
  }
}
