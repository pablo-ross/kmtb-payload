// app/api/test/route.ts
import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise })
    
    // Test database connection
    const users = await payload.find({
      collection: 'users',
      limit: 1,
    })

    return NextResponse.json({
      success: true,
      message: 'Payload is working!',
      userCount: users.totalDocs,
      collections: payload.config.collections.map(c => c.slug),
    })
  } catch (error) {
    console.error('Payload test error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 })
  }
}