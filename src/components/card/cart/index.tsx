"use client"

import { useCart } from "@/context/cart"

export default function CardListCart() {
    const { cart } = useCart()

    return (
        <ul>
            {cart.map(item =>
                <li key={item.id}>
                    <div>
                        <img src={item.image} alt={item.name} />
                    </div>
                    <p>{item.name}</p>
                    <p>{item.price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</p>
                </li>)}
        </ul>
    )
}