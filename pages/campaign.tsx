import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Head from 'next/head'
import { ReactElement } from 'react'
import { Layout } from '../page-components/Layout'

const Campaign = () => {
  const { data, isLoading } = useQuery(['getTodos', 5, {preview: true}], () => axios('https://jsonplaceholder.typicode.com/posts'))
  if (isLoading) return 'loading...'
  // if (data) console.log(data.data)
  return (
    <>
      <Head>
        <title>Campaign</title>
      </Head>
      <h2>Campaign</h2>
    </>
  )
}

export default Campaign

Campaign.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}