import { ICart, IProduct } from "@/components/card/interface";

export interface ICartContext {
  cart: ICart[];
  addItemCart: (product: IProduct, variation: number) => void;
  removeItemCart: (itemCart: ICart) => void;
  addQuantityItem: (itemCart: ICart) => void;
  removeQuantityItem: (itemCart: ICart) => void;
}
