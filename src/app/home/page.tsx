import Link from "next/link";
import CardProduct from "@/components/card";
import Header from "@/components/header";
import style from "@/sass/MainPage.module.sass";
import categories from "@/utils/categories";
import items from "@/utils/items";
import { Flip, ToastContainer } from "react-toastify";
import { CartProvider } from "@/context/cart";
import "react-toastify/ReactToastify.css";

export default function HomePage() {
  return (
    <CartProvider>
      <Header />

      <main className={style.main}>
        <nav>
          {categories.map((categorie) => (
            <Link href={`/product?categorie=${categorie}`} key={categorie}>
              {categorie}
            </Link>
          ))}
        </nav>

        <section>
          <ul>
            {items.map((item) => (
              <CardProduct product={item} key={item.name} />
            ))}
          </ul>
        </section>
      </main>

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Flip}
        theme="light"
        limit={2}
      />
    </CartProvider>
  );
}
