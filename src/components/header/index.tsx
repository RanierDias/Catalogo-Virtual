"use client";
import { MdFavorite, MdSearch, MdOutlineSearchOff } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import style from "@/sass/Header.module.sass";
import { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState(false);

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
          </a>
        )}
      </nav>
    </header>
  );
}
