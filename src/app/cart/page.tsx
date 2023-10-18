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
    const requestOrder = `Pedido de compra\n
    - - - -- - - - -- - - - -- - - - -- - - -- - - - -- - - -
    \nCód. - Nome - Cor - Qtd\n${cart
      .map(
        (item) =>
          `${item.id} - ${item.name} - ${item.variation} - ${item.amount}\n`
      )
      .join("\n")}
      Quanto fica o total do pedido?
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

        <Link
          className={style.whatsappLink}
          href={forwardWhatsapp()}
          target="_blank"
        >
          Fazer Pedido
          <BsWhatsapp />
        </Link>

        <Link href="/home">
          <AiOutlineHome />
        </Link>
      </main>
    </>
  );
}
