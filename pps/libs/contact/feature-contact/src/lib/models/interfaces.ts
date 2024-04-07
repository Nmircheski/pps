export interface BaseContactItem {
  label: string;
  value: string;
}

export interface ContactLocationItem extends BaseContactItem {
  type: 'link';
  linkUrl: string;
}

export interface ContactEmailItem extends BaseContactItem {
  type: 'email';
}

export interface ContactPhoneItem extends BaseContactItem {
  type: 'phone';
}

export type ContactItem =
  | ContactLocationItem
  | ContactEmailItem
  | ContactPhoneItem;
