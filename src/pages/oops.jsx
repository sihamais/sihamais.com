import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function Oops() {
  return (
    <>
      <Head>
        <title>Oops - Siham Aissaoui</title>
        <meta
          name="description"
          content="Uh oh, something went wrong."
        />
      </Head>
      <SimpleLayout
        title="Uh-oh, something went wrong!"
        intro="I'm sorry for the inconvenience. I will investigate the issue. Please try again later."
      />
    </>
  )
}
