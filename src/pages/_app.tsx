import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";

//colocar fora do App, para não precisar recarregar quando sair da página
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
