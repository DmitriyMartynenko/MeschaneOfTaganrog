export type User = {
  name: string;
  phone: string;
  email: string;
};

export type Excursion = {
  title: string;
  description: string;
  price: number;
};

export type ExcursionOrder = {
  user: User;
  excursion: Excursion;
  orderDate: Date;
};

export type Review = {
  id: number;
  author: string;
  authorJobTitle: string;
  authorImgSrc: string;
  reviewText: string;
}