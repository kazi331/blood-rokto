import { ReactElement } from "react";
import Actions from "../page-components/home/Actions";
import Consult from "../page-components/home/Consult";
import Hero from "../page-components/home/Hero";
import HeroCTA from "../page-components/home/HeroCTA";
import { Layout } from "../page-components/Layout";

export default function Page() {
  return (<>
    <>
      <Hero />
      <HeroCTA />
      <Actions />
      <Consult />
    </>
  </>
  )
}


Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}