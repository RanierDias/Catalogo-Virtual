"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import CardProduct from "@/components/card";
import Header from "@/components/header";
import style from "@/sass/SearchPage.module.sass";
import { AiOutlineHome } from "react-icons/ai";
import items from "@/utils/items";

export default function SearchPage() {
  const params = useSearchParams();
  const search = params.get("product") || "";

  return (
    <>
      <Header />

      <main className={style.main}>
        <ul>
          {items.map(
            (item) =>
              item.name.toLowerCase().includes(search.toLowerCase()) && (
                <CardProduct product={item} key={item.id} />
              )
          )}
        </ul>

        <Link href="/home">
          <AiOutlineHome />
        </Link>
      </main>
    </>
  );
}
