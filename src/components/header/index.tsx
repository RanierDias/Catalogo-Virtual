"use client";
import { useState } from "react";
import { MdFavorite, MdSearch, MdOutlineSearchOff } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import style from "@/sass/Header.module.sass";
import { useCart } from "@/context/cart";

export default function Header() {
  const [search, setSearch] = useState(false);
  const { cart } = useCart();

  return (
    <header className={style.header}>
      <h1>LUXURY GOODS</h1>

      <nav>
        {search ? (
          <form action="/search">
            <input
              type="text"
              placeholder="Pesquise o seu melhor..."
              name="product"
            />
          </form>
        ) : (
          <a href="/favorite">
            <MdFavorite />
          </a>
        )}
        <button onClick={() => setSearch(!search)}>
          {search ? <MdOutlineSearchOff /> : <MdSearch />}
        </button>
        {!search && (
          <a href="/cart">
            <IoMdCart />
            {cart.length}
          </a>
        )}
      </nav>
    </header>
  );
}
