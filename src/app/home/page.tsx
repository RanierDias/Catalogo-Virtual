import Link from "next/link";
import CardProduct from "@/components/card";
import Header from "@/components/header";
import style from "@/sass/MainPage.module.sass";
import categories from "@/utils/categories";
import items from "@/utils/items";

export default function HomePage() {
  return (
    <>
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
    </>
  );
}
