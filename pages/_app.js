import { SessionProvider } from "next-auth/react";

import "@/styles/globals.css";
import { UserProvider } from "@/context/userContext";
import { CajerosProvider } from "@/context/cajerosContext";


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <UserProvider>
        <CajerosProvider>
          <Component {...pageProps} />
        </CajerosProvider>
      </UserProvider>
    </SessionProvider>
  );
}
