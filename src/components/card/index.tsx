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
            src={product.image}
            alt={`${product.name}, cor ${product.color}. ${product.description}`}
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
            {product.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </h3>
        </a>
      </div>

      <button onClick={() => addItemCart(product)}>Comprar</button>
    </li>
  );
}
