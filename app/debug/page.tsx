// app/debug/page.tsx
export default function DebugPage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'monospace' }}>
      <h1>Debug Info</h1>
      <h2>Environment Variables:</h2>
      <pre>{JSON.stringify({
        DATABASE_URI: process.env.DATABASE_URI,
        PAYLOAD_SECRET: process.env.PAYLOAD_SECRET ? '[SET]' : '[NOT SET]',
        NODE_ENV: process.env.NODE_ENV,
        NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
      }, null, 2)}</pre>
      
      <h2>Next.js Info:</h2>
      <p>This page loaded successfully, so Next.js is working.</p>
      
      <div style={{ marginTop: '2rem' }}>
        <a 
          href="/admin" 
          style={{ 
            padding: '0.75rem 1.5rem', 
            backgroundColor: '#007acc', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '4px' 
          }}
        >
          Try Admin Panel
        </a>
      </div>
    </div>
  )
}