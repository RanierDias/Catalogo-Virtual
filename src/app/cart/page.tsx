import CardListCart from "@/components/card/cart";
import Header from "@/components/header";
import { CartProvider } from "@/context/cart";

export default function CartPage() {

    return (
        <CartProvider>
            <Header />

            <main>
                <h1>Você esta no seu carrinho</h1>

                <CardListCart />
            </main>
        </CartProvider>
    )
}