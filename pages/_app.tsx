import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

import { client } from "../libs/apollo-graphql";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
