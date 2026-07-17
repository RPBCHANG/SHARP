export async function GET() {
  const data = {
    status: "ok",
    name: "MOON TV",
    version: "1.0.0",
    playlist_url: "https://sharp-abc.vercel.app/tv.m3u",
    server_time: new Date().toISOString()
  };

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
