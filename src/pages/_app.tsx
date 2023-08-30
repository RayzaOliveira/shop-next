import type { AppProps } from "next/app";
import { globalStyles } from "@/styles/global";

import logoImg from "../assests/logo.svg";
import { Container, Header } from "../styles/pages/app";

//colocar fora do App, para não precisar recarregar quando sair da página
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logoImg.src} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
