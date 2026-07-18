export default function Page() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>MOON TV</h1>
      <p style={{ fontSize: '1.2rem', color: '#888' }}>Server is Running</p>
      <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #333', borderRadius: '8px' }}>
        <p>API Status: <span style={{ color: '#0f0' }}>Online</span></p>
        <p>Playlist: <a href="/tv.m3u" style={{ color: '#0070f3' }}>/tv.m3u</a></p>
      </div>
    </div>
  );
}
