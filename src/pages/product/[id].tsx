import { useRouter } from "next/router";

export default function Product() {
  // Usa o hook useRouter para obter os parâmetros da consulta da URL.
  const { query } = useRouter();

  // Retorna um elemento h1 que mostra a palavra "Product:" seguida dos parâmetros da consulta convertidos em uma string JSON.
  return <h1> Product: {JSON.stringify(query)}</h1>;
}
