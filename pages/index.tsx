import Actions from "../page-components/home/Actions";
import Hero from "../page-components/home/Hero";
import HeroCTA from "../page-components/home/HeroCTA";
import Consult from "../page-components/home/Consult";
import { Layout } from "../page-components/Layout";
import Nested from "../page-components/Nested";
import { ReactElement } from "react";

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