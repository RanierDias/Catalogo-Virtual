import { IProduct } from "@/components/card/interface";

export default class itemCart {
  id: string;
  image: string;
  name: string;
  price: number;
  amount: number;
  variation: string;

  constructor(product: IProduct, variation: number) {
    const { color, image, price } = product.variations[variation];

    this.id = product.id;
    this.name = product.name;
    this.amount = 1;
    this.image = image;
    this.price = price;
    this.variation = color;
  }
}
