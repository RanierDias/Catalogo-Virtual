import CardListCart from "@/components/card/cart";
import Header from "@/components/header";

export default function CartPage() {
  return (
    <>
      <Header />

      <main>
        <h1>Você esta no seu carrinho</h1>

        <CardListCart />
      </main>
    </>
  );
}
