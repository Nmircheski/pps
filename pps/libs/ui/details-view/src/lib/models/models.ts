export interface DetailsViewConfig {
  subTitle: string;
  mainTitle: string;
  paragraphContent: string;
  imageSrc: string;
  buttonTitle: string;
  marginBottom?: boolean;
  layout: DetailsLayout;
}

export type DetailsLayout = 'regular' | 'col-reverse' | 'row-reverse';
