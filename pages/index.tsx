import Head from "next/head";
import { ReactElement } from "react";
import DonerList from "../page-components/dashboard/DonerList";
import Actions from "../page-components/home/Actions";
import Consult from "../page-components/home/Consult";
import Hero from "../page-components/home/Hero";
import HeroCTA from "../page-components/home/HeroCTA";
import { Layout } from "../page-components/Layout";

export default function Page() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Hero />
      <HeroCTA />
      <div className="pt-5 md:pt-32 container">
        <DonerList />
      </div>
      <Actions />
      <Consult />

    </>
  )
}


Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}