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
import userWhatsappData from "../../../utils/whatsapp";

export default function ProductPage({ params }: { params: { item: string } }) {
  const decodeProductName = decodeURIComponent(params.item);
  const product = items.find((item) => item.name.includes(decodeProductName));
  const [variation, setVariation] = useState(0);
  const { addItemCart } = useCart();

  function forwardWhatsapp() {
    if (!product) return "/home";

    const requestOrder = `Pedido de compra\n 
    - - - -- - - - -- - - - -- - - - -- - - -- - - - -- - - - 
    \nCód. - Nome - Cor - Qtd\n${product.id} - ${product.name} - ${product.variations[variation].color} - 1\n
    Quanto fica o total do pedido?
    `;
    const message = encodeURIComponent(requestOrder);
    const whatsappLink = `https://api.whatsapp.com/send?phone=+55${userWhatsappData.number}&text=${message}`;

    return whatsappLink;
  }

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

            <Link
              className={style.whatsappLink}
              href={forwardWhatsapp()}
              target="_blank"
            >
              Fazer Pedido
              <BsWhatsapp />
            </Link>
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
