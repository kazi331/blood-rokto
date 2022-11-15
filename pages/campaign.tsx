import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Head from 'next/head'
import { ReactElement } from 'react'
import { Layout } from '../page-components/Layout'

const Campaign = () => {
  const { data, isLoading, isError, error } = useQuery(['getTodos', 5, { preview: true }], () => axios('https://jsonplaceholder.typicode.com/posts'))
  if (isLoading) return 'loading...'
  if (isError) return console.log(error)
  if (isError) return 'Something Went Wrong!'

  // if (data) console.log(data.data)
  
  return (
    <>
      <Head>
        <title>Campaign</title>
      </Head>
      <div>Campaign</div>
    </>
  )
}

export default Campaign

Campaign.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}