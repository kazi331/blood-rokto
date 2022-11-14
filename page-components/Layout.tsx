import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";




const queryClient = new QueryClient()
export function Layout({ children }: { children: React.ReactNode }) {
  return <>
    <Head>
      <title>Rokto</title>
      <link rel="shortcut icon" href="/rokto.png" type="image/x-icon" />
    </Head>
    <NavBar />
    <main>{children}</main>
    <Footer />
  </>
}