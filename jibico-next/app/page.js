export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ color: 'var(--gold)', fontSize: '48px', marginBottom: '20px' }}>
        سلام Next.js! 🎉
      </h1>
      <p style={{ color: 'var(--muted)', fontSize: '18px' }}>
        فونت Dana و استایل‌های کلی کار می‌کنن.
      </p>
    </div>
  )
}