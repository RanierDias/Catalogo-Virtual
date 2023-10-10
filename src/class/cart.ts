import { IProduct } from "@/components/card/interface";

export default class itemCart {
  id: string;
  name: string;
  price: number;
  amount: number;
  variation: number;

  constructor(product: IProduct, variation: number) {
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.amount = 1;
    this.variation = variation;
  }
}
