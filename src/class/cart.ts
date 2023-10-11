import { IProduct } from "@/components/card/interface";

export default class itemCart {
  id: string;
  image: string;
  name: string;
  price: number;
  amount: number;
  variation: string;
  // criar ou refatorar o price para ficar o preço total das variations.

  constructor(product: IProduct, variation: number) {
    this.id = product.id;
    this.image = product.image;
    this.name = product.name;
    this.amount = 1;
    
    if (variation > 0) {
      // fazer a questão da variação do produto
    }
  }
}
