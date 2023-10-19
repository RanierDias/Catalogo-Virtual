"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import CardProduct from "@/components/card";
import Header from "@/components/header";
import style from "@/sass/MainPage.module.sass";
import categories from "@/utils/categories";
import items from "@/utils/items";

export default function CategoriePage() {
  const params = useSearchParams();
  const categorie = params.get("categorie");

  return (
    <>
      <Header />

      <main className={style.main}>
        <nav>
          <Link href="/home" className={style.categorieSelected}>
            {categorie}
          </Link>

          {categories.map(
            (element) =>
              element != categorie && (
                <Link href={`/product?categorie=${element}`} key={element}>
                  {element}
                </Link>
              )
          )}
        </nav>

        <section>
          <ul>
            {items.map(
              (item) =>
                item.categorie == categorie && (
                  <CardProduct product={item} key={item.name} />
                )
            )}
          </ul>
        </section>
      </main>
    </>
  );
}
