import { IProduct } from '../../models/models';

export const products: IProduct[] = [
  {
    id: 'labels',
    title: 'Самолепливи етикети',
    imageSrc: 'assets/gallery/labels/label_main.webp',
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
        src: 'assets/gallery/labels/label_02.webp',
      },

      {
        src: 'assets/gallery/labels/label_04.webp',
      },

      {
        src: 'assets/gallery/labels/label_06.webp',
      },
    ],
  },
  {
    id: 'cups',
    title: 'Хартиени чаши',
    imageSrc: 'assets/gallery/cups/cups_main.webp',
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
        src: 'assets/gallery/cups/cups_main.webp',
      },
      {
        src: 'assets/gallery/cups/cups_02.webp',
      },
      {
        src: 'assets/gallery/cups/cups_04.webp',
      },
      {
        src: 'assets/gallery/cups/cups_06.webp',
      },
    ],
  },
];
