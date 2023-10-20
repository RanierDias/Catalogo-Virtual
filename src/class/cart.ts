import { IProduct } from "@/components/card/interface";

export default class itemCart {
  id: string;
  image: string;
  name: string;
  price: number;
  amount: number;
  variation: {
    index: number;
    value: string;
  };

  constructor(product: IProduct, variation: number) {
    const { value, image, price } = product.variations[variation];
    const variatioProduct = { index: variation, value };

    this.id = product.id;
    this.name = product.name;
    this.amount = 1;
    this.image = image;
    this.price = price;
    this.variation = variatioProduct;
  }
}
