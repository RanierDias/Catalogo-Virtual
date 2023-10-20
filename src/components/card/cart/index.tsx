"use client";

import { useCart } from "@/context/cart";
import style from "@/sass/CardCart.module.sass";
import { Button, ButtonGroup } from "@mui/material";

export default function CardListCart() {
  const { cart, removeItemCart, addQuantityItem, removeQuantityItem } =
    useCart();

  return (
    <>
      <ul className={style.list}>
        {cart.length > 0 ? (
          <p>Seu carrinho esta pronto para o pedido</p>
        ) : (
          <h2>O seu carrinho esta vazio</h2>
        )}
        {cart.map((item) => (
          <li key={`${item.id} - ${item.variation.value}`}>
            <div>
              <img src={item.image} alt={item.name} />
            </div>

            <div>
              <h2>{item.name}</h2>
              <h3>
                {item.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                }) + ` - QTD: ${item.amount}`}
              </h3>

              <ButtonGroup variant="text">
                <Button onClick={() => removeQuantityItem(item)}>-</Button>
                <Button
                  style={{ color: "crimson" }}
                  onClick={() => removeItemCart(item)}
                >
                  Excluir
                </Button>
                <Button onClick={() => addQuantityItem(item)}>+</Button>
              </ButtonGroup>
            </div>
          </li>
        ))}

        <li className={style.totalPrice}>
          <p>Valor total: </p>
          <h2>
            {cart
              .reduce((acc, cur) => acc + cur.price * cur.amount, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </h2>
        </li>
      </ul>
    </>
  );
}
