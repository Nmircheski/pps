import { Image } from '@pps/ui/gallery';

export interface IProduct {
  id: 'labels' | 'cups';
  title: string;
  imageSrc: string;
  cardList: {
    header: string;
    content: string;
  }[];
  imageGalleryUrls: Image[];
}
