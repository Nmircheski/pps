import { IProduct } from '../../models/models';

export const products: IProduct[] = [
  {
    id: 'labels',
    title: 'Самолепливи етикети',
    imageSrc: 'assets/gallery/labels/label_main.png',
    cardList: [
      {
        header: 'Самолеплива хартија',
        content:
          'Производи што бараат соодветна заштита од присутност на воздух.',
      },
      {
        header: 'Самолеплива Пластика (ролна)',
        content:
          'Производи што бараат соодветна заштита од присутност на воздух.',
      },
      {
        header: 'Термална Самолеплива Хартија',
        content:
          'Производи што бараат соодветна заштита од присутност на воздух.',
      },
      {
        header: 'А4 Самолепливи Пресечени Етикети',
        content:
          'Производи што бараат соодветна заштита од присутност на воздух.',
      },
    ],
    imageGalleryUrls: [
      {
        src: 'assets/gallery/labels/label_01.png',
      },
      {
        src: 'assets/gallery/labels/label_02.png',
      },
      {
        src: 'assets/gallery/labels/label_03.png',
      },
      {
        src: 'assets/gallery/labels/label_04.png',
      },
      {
        src: 'assets/gallery/labels/label_05.png',
      },
      {
        src: 'assets/gallery/labels/label_06.png',
      },
      {
        src: 'assets/gallery/labels/label_07.png',
      },
    ],
  },
  {
    id: 'cups',
    title: 'Хартиени чаши',
    imageSrc: 'assets/gallery/cups/cups_main.png',
    cardList: [
      {
        header: 'За пијалоци',
        content:
          'Производи што бараат соодветна заштита од присутност на воздух.',
      },
      {
        header: 'За пијалоци',
        content:
          'Производи што бараат соодветна заштита од присутност на воздух.',
      },
    ],
    imageGalleryUrls: [
      {
        src: 'assets/gallery/cups/cups_main.png',
      },
      {
        src: 'assets/gallery/cups/cups_02.png',
      },
      {
        src: 'assets/gallery/cups/cups_04.png',
      },
      {
        src: 'assets/gallery/cups/cups_06.png',
      },
    ],
  },
];
