"use client";

import Link from "next/link";
import CardListCart from "@/components/card/cart";
import Header from "@/components/header";
import { AiOutlineHome } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { useCart } from "@/context/cart";
import style from "@/sass/CartPage.module.sass";
import userWhatsappData from "@/utils/whatsapp";

export default function CartPage() {
  const { cart } = useCart();

  function forwardWhatsapp() {
    const requestOrder = `- \t\t\t\t*Pedido de compra*\t\t\t\t-\n
    - - - -- - - - -- - - - -- - - - -- - - -- - - - -- - - - -- - - - -- - - - -- -
    \n*Cód. - (Qtd) Nome - Cor - Preço*\n${cart
      .map(
        (item) =>
          `${item.id} - ${item.amount > 1 ? `(${item.amount}x)` : ""} ${
            item.name
          } - ${item.variation} - ${item.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}\n`
      )
      .join("\n")}
      \t\t\tO pedido total fica por ${cart
        .reduce((acc, cur) => acc + cur.price * cur.amount, 0)
        .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}?
      `;
    const message = encodeURIComponent(requestOrder);
    const whatsappLink = `https://api.whatsapp.com/send?phone=+55${userWhatsappData.number}&text=${message}`;

    return whatsappLink;
  }

  return (
    <>
      <Header />

      <main className={style.main}>
        <CardListCart />

        {cart.length > 0 && (
          <Link
            className={style.whatsappLink}
            href={forwardWhatsapp()}
            target="_blank"
          >
            Fazer Pedido
            <BsWhatsapp />
          </Link>
        )}

        <Link href="/home">
          <AiOutlineHome />
        </Link>
      </main>
    </>
  );
}
