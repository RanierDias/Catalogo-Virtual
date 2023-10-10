"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import { ICart, IProduct } from "@/components/card/interface";
import itemCart from "@/class/cart";
import { toast } from "react-toastify";
import { ICartContext } from "./interface";

const CartContext = createContext<ICartContext>({} as ICartContext);
const cartFromStorage = localStorage.getItem("luxury:cart") || "[]";

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ICart[]>(JSON.parse(cartFromStorage));

  function finishedCart(newCart: ICart[], productName: string, amount: number) {
    localStorage.setItem("luxury:cart", JSON.stringify(newCart));
    const message =
      amount > 0
        ? `Tem ${amount}x ${productName} no carrinho`
        : `${productName} foi adicionado ao carrinho`;

    toast(message, {
      type: "success",
      toastId: productName,
    });

    setCart(newCart);
  }

  function addItemCart(product: IProduct) {
    const productFound = cart.find((item) => item.id == product.id);

    if (!productFound) {
      const newItemCart = new itemCart(product, 0);
      const newCart = [...cart, newItemCart];

      return finishedCart(newCart, product.name, 0);
    }

    const newCart = cart.map((item) => {
      if (item.id == product.id) item.amount += 1;

      return item;
    });

    return finishedCart(newCart, product.name, productFound.amount);
  }

  return (
    <CartContext.Provider value={{ cart, addItemCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);

  return context;
};
