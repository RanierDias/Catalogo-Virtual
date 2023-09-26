"use client";
import { useState } from "react";
import Header from "@/components/header";
import items from "@/utils/items";
import style from "@/sass/ProductPage.module.sass";

export default function ProductPage({ params }: { params: { item: string } }) {
  const decodeProductName = decodeURIComponent(params.item);
  const product = items.find((item) => item.name.includes(decodeProductName));
  const [itemVar, setItemVar] = useState(0);

  return (
    <>
      <Header />

      <main>
        <div>
          <img
            src={
              itemVar == 0 ? product?.image : product?.variations[itemVar].image
            }
            alt={`${product?.name}, cor ${
              itemVar == 0 ? product?.color : product?.variations[itemVar].color
            }`}
          />
        </div>

        <div>
          <h3>{product?.name}</h3>
          <h2>
            {itemVar == 0
              ? product?.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })
              : product?.variations[itemVar].price?.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
          </h2>

          <select
            name="type"
            id="type"
            onChange={(e) => setItemVar(Number(e.target.value))}
          >
            {product?.variations.map((item, i) => (
              <option value={i}>Cor: {item.color}</option>
            ))}
          </select>
        </div>
      </main>
    </>
  );
}
