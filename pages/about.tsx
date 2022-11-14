import Head from 'next/head'
import React, { ReactElement } from 'react'
import { Layout } from '../page-components/Layout'

const About = () => {
  return (
    <>
    <Head>
      <title>About</title>
    </Head>
    <h2>About</h2>
    </>
  )
}

export default About

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}