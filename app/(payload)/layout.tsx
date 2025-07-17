// app/(payload)/layout.tsx
/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
import type { Metadata } from 'next'

import config from '@payload-config'
import { RootLayout } from '@payloadcms/next/layouts'
import { importMap } from '../../importMap.js'

import './custom.scss'

type Args = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Payload Admin',
  description: 'Payload CMS Admin Panel',
}

const Layout = ({ children }: Args) => (
  <RootLayout 
    config={config} 
    importMap={importMap}
    serverFunction={() => Promise.resolve(null)}
  >
    {children}
  </RootLayout>
)

export default Layout