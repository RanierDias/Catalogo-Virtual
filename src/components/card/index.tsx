"use client";

import { BsBoxSeamFill } from "react-icons/bs";
import { IPropsCard } from "./interface";
import style from "@/sass/Card.module.sass";
import { useCart } from "@/context/cart";

export default function CardProduct({ product }: IPropsCard) {
  const encodeProductName = encodeURIComponent(product.name);
  const { addItemCart } = useCart();

  return (
    <li className={style.card}>
      <div>
        <a href={`/product/${encodeProductName}`}>
          <img
            src={product.variations[0].image}
            alt={`${product.name}, cor ${product.variations[0].color}. ${product.description}`}
          />
        </a>
      </div>
      <div>
        <a href={`/product/${encodeProductName}`}>
          <h3>{product.name}</h3>

          <small>
            Cód. {product.id} - <BsBoxSeamFill /> {product.saleType}
          </small>

          <h3>
            {product.variations[0].price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </h3>
        </a>
      </div>

      <button onClick={() => addItemCart(product, 0)}>Comprar</button>
    </li>
  );
}
