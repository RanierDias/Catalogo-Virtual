"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/header";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import style from "@/sass/ProductPage.module.sass";
import items from "@/utils/items";
import { useCart } from "@/context/cart";

export default function ProductPage({ params }: { params: { item: string } }) {
  const decodeProductName = decodeURIComponent(params.item);
  const product = items.find((item) => item.name.includes(decodeProductName));
  const [variation, setVariation] = useState(0);
  const { addItemCart } = useCart();

  return (
    <>
      <Header />

      {product ? (
        <main className={style.main}>
          <div>
            <img
              src={product?.variations[variation].image}
              alt={`${product?.name}, cor ${product?.variations[variation].color}`}
            />
          </div>

          <div>
            <h2>{product?.name}</h2>
            <h1>
              {product?.variations[variation].price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </h1>

            <div>
              <FormControl sx={{ minWidth: 120, maxWidth: 200 }}>
                <InputLabel id="variations-item">Cor</InputLabel>
                <Select
                  labelId="variations-item"
                  label="Cor"
                  value={variation}
                  onChange={(e) => setVariation(Number(e.target.value))}
                >
                  {product?.variations.map((item, i) => (
                    <MenuItem value={i} key={i}>
                      {item.color}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Button
                onClick={() => addItemCart(product, variation)}
                variant="outlined"
                size="large"
                style={{ height: 53 }}
              >
                Carrinho
              </Button>
            </div>

            <Button variant="contained" size="large">
              Fazer Pedido
              <BsWhatsapp />
            </Button>
          </div>

          <Link href="/home">
            <AiOutlineHome />
          </Link>
        </main>
      ) : (
        <main>Esse produto não existe</main>
      )}
    </>
  );
}
