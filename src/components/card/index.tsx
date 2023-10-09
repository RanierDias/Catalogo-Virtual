import { BsBoxSeamFill } from "react-icons/bs";
import style from "@/sass/Card.module.sass";

interface IVariatonsProduct {
  image?: string;
  color: string;
  price?: number;
}

interface IProduct {
  id: string;
  image: string;
  name: string;
  description: string;
  color: string;
  price: number;
  categorie: string;
  saleType: string;
  variations?: IVariatonsProduct[];
}

interface IPropsCard {
  product: IProduct;
}

export default function CardProduct({ product }: IPropsCard) {
  const encodeProductName = encodeURIComponent(product.name);

  return (
    <li className={style.card}>
      <div>
        <a href={`/product/${encodeProductName}`}>
          <img
            src={product.image}
            alt={`${product.name}, cor ${product.color}. ${product.description}`}
          />
        </a>
      </div>
      <div>
        <a href={`/product/${encodeProductName}`}>
          <h3>{product.name}</h3>

          <small>
            Cód. {product.id} - <BsBoxSeamFill /> {product.saleType}
          </small>

          <h3>
            {product.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </h3>
        </a>
      </div>

      <div>
        <span>0</span>
        <button>Comprar</button>
      </div>
    </li>
  );
}
