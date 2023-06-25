import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function Confirmation() {
  return (
    <>
      <Head>
        <title>Confirm your subscription - Siham Aissaoui</title>
        <meta
          name="description"
          content="A confirmation email has been sent to your address."
        />
      </Head>
      <SimpleLayout
        title="A confirmation email has been sent to your address."
        intro="By clicking on the confirm button, you'll accept to subscribe to my newsletter. I’ll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you’d want to hear about. You can unsubscribe at any time, no hard feelings."
      />
    </>
  )
}
