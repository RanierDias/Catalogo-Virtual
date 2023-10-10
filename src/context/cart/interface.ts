import { ICart, IProduct } from "@/components/card/interface";

export interface ICartContext {
  cart: ICart[];
  addItemCart: (product: IProduct) => void;
}
