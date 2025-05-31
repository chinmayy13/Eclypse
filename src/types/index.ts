export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  sizes: string[];
  image: string;
  details: {
    sizeFit: string;
    deliveryReturns: string;
    howMade: string;
  };
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  caption: string;
}