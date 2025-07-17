import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for standalone Docker deployment
  output: 'standalone',
  experimental: {
    reactCompiler: false,
  },
  images: {
    domains: ['localhost'],
  },
}

export default withPayload(nextConfig)