"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ICart, IProduct } from "@/components/card/interface";
import itemCart from "@/class/cart";
import { toast } from "react-toastify";
import { ICartContext } from "./interface";

const CartContext = createContext<ICartContext>({} as ICartContext);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ICart[]>([]);

  useEffect(() => {
    const cartFromStorage = localStorage.getItem("luxury:cart") || "[]";

    setCart(JSON.parse(cartFromStorage));
  }, []);

  function finishedCart(itemCart: ICart, newCart: ICart[]) {
    const message =
      itemCart.amount > 1
        ? `Tem ${itemCart.amount}x ${itemCart.name} ${itemCart.variation} no carrinho`
        : `${itemCart.name} ${itemCart.variation} foi adicionado ao carrinho`;

    localStorage.setItem("luxury:cart", JSON.stringify(newCart));

    toast(message, {
      type: "success",
      toastId: itemCart.id,
    });

    setCart(newCart);
  }

  function addItemCart(product: IProduct, variation: number) {
    const productFound = cart.find(
      (item) =>
        item.id == product.id &&
        item.variation == product.variations[variation].color
    );

    if (!productFound) {
      const newItemCart = new itemCart(product, variation);
      const newCart = [...cart, newItemCart];

      return finishedCart(newItemCart, newCart);
    }

    const newCart = cart.map((item) => {
      if (
        item.id == productFound.id &&
        item.variation == product.variations[variation].color
      )
        item.amount += 1;

      return item;
    });

    return finishedCart(productFound, newCart);
  }

  function removeItemCart(itemCart: ICart) {
    const newCart = cart.filter((item) =>
      item.id === itemCart.id ? item.variation != itemCart.variation : true
    );

    localStorage.setItem("luxury:cart", JSON.stringify(newCart));
    setCart(newCart);
  }

  function removeQuantityItem(itemCart: ICart) {
    if (itemCart.amount == 1) return removeItemCart(itemCart);

    const newCart = cart.map((item) => {
      if (item.id == itemCart.id && item.variation == itemCart.variation)
        item.amount -= 1;

      return item;
    });

    localStorage.setItem("luxury:cart", JSON.stringify(newCart));
    setCart(newCart);
  }

  function addQuantityItem(itemCart: ICart) {
    const newCart = cart.map((item) => {
      if (item.id == itemCart.id && item.variation == itemCart.variation)
        item.amount += 1;

      return item;
    });

    localStorage.setItem("luxury:cart", JSON.stringify(newCart));
    setCart(newCart);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemCart,
        removeItemCart,
        addQuantityItem,
        removeQuantityItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);

  return context;
};
