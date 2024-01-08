import { useRouter } from "next/router";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";

export default function Product() {
  // Usa o hook useRouter para obter os parâmetros da consulta da URL.
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,99</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim unde
          temporibus non. Deleniti est, doloribus perspiciatis enim soluta,
          praesentium dolor tempora provident minima maxime similique sapiente
          cumque repudiandae explicabo voluptates.
        </p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
