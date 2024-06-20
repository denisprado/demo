import { Badge } from '@/components/Badge'
import { Background } from '@/components/Background'
import Image from 'next/image'
import React from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
const payload = await getPayloadHMR({ config: configPromise })

const data = await payload.find({
  collection: 'media',
})

const Page = () => {
  const src = data.docs[0].url
  return (
    <>
      <main>
        <article>
          <Image src={src!} alt="" width={150} height={150} />
        </article>
      </main>
      <Background />
    </>
  )
}

export default Page
