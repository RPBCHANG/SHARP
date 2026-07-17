export async function GET() {
  const data = {
    status: "ok",
    name: "MOON TV",
    playlist_url: "https://sharp-abc.vercel.app/tv.m3u"
  };
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
  });
}
