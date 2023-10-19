import Link from "next/link";
import { TbHexagon3D } from "react-icons/tb";
import { AiFillInstagram } from "react-icons/ai";
import style from "@/sass/LandingPage.module.sass";

export default function LandingPage() {
  return (
    <div className={style.container}>
      <header className={style.infor}>
        <h3>YEAR 2023</h3>
        <h3>COLLECTION APRIL</h3>
        <small>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
          consectetur modi itaque error, iste nesciunt! Eligendi nemo, totam
          porro fugit sit saepe animi eveniet nostrum, neque itaque expedita
          corporis consequuntur?
        </small>
      </header>
      <main className={style.brand}>
        <TbHexagon3D />
        <h1>LUXURY GOODS</h1>
        <a href="/home">Conferir Produtos</a>
      </main>
      <footer className={style.about}>
        <h3>Wholesale catalog</h3>
        <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</small>
        <Link href="/home">
          <AiFillInstagram />
        </Link>
      </footer>
    </div>
  );
}
