// app/(payload)/admin/[[...segments]]/page.tsx
import type { Metadata } from 'next'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '../../../../importMap.js'
import configPromise from '@payload-config'

type Args = {
  params: Promise<{
    segments: string[]
  }>
  searchParams: Promise<{
    [key: string]: string | string[]
  }>
}

export const generateMetadata = ({ params, searchParams }: Args): Promise<Metadata> =>
  generatePageMetadata({ config: configPromise, params, searchParams })

const Page = ({ params, searchParams }: Args) =>
  RootPage({ 
    config: configPromise, 
    importMap,
    params, 
    searchParams 
  })

export default Page