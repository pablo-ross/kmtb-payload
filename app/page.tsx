// app/page.tsx
export default function HomePage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>Welcome to Payload CMS</h1>
      <p>Your Payload CMS is running successfully!</p>
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
          Go to Admin Panel
        </a>
      </div>
    </div>
  )
}