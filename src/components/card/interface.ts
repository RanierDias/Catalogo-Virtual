interface IVariatonsProduct {
  image?: string;
  color: string;
  price?: number;
}

export interface IProduct {
  id: string;
  image: string;
  name: string;
  description: string;
  color: string;
  price: number;
  categorie: string;
  saleType: string;
  variations?: IVariatonsProduct[];
}

export interface IPropsCard {
  product: IProduct;
}

export interface ICart {
  id: string;
  image: string;
  name: string;
  price: number;
  amount: number;
  variation: string;
}
