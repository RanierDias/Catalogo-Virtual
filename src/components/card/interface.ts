interface IVariatonsProduct {
  image: string;
  color: string;
  price: number;
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  categorie: string;
  saleType: string;
  variations: IVariatonsProduct[];
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
